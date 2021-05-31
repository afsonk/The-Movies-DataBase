import React from "react";
import {useHistory} from 'react-router-dom';
import {FilmsApi} from "../../api/api";
import {useFilms} from "../../context/GlobalState";
import {
    clearMovieDetail, setActiveGenre,
    setActivePage,
    setFilmsInState,
    setMovieDetail,
    setMovieTrailer
} from "../../context/ActionCreators"
import {api} from "../../types/types";
import PlayBtn from "./PlayBtn";
import AddToFavBtn from "./AddToFavBtn";
import Trailer from "./Trailer";
import './styles.scss'

type Props = {
    contentType: string,
    id: string
}

const MovieDetail: React.FC<Props> = ({contentType, id}) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const {state, dispatch} = useFilms();

    const {movie, trailerId} = state;
    const title = movie?.title ? movie?.title : movie?.original_name;
    const history = useHistory()

    const opts = {
        height: '80%',
        width: '90%',
        playerVars: {
            autoplay: 1,
        },
    };


    const handleOutsideClick = (e: any) => {
        if (e.target.className === 'trailer__container') {
            setIsPlaying(false);
        }
    }
    const isMobile = (): string => {
        if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
             return 'auto';
        }
        else {
            return 'hidden';
        }
    }

    const handleGangesClick = (id: number) => {
        dispatch(setActivePage(1));
        dispatch(setActiveGenre(id));
        window.scrollTo(0, 0);
        history.push('/');
    }

    React.useEffect(() => {
        FilmsApi.getMovieById(contentType,id)
            .then(res => dispatch(setMovieDetail(res)));
        FilmsApi.getMovieTrailer(contentType,id)
            .then(res => dispatch(setMovieTrailer(res.results[0]?.key)));
    }, [id]);

    React.useEffect(() => {
        document.body.style.overflow = isMobile();
        document.addEventListener('click', handleOutsideClick);
        return () => {
            dispatch(clearMovieDetail());
            dispatch(setMovieTrailer(null));
            document.body.style.overflow = 'auto';
            document.removeEventListener('click', handleOutsideClick)
        }
    }, []);

    return (
        <main
            className={'movie__background'}
            style={{backgroundImage: `url(${api.bigImg}${movie?.backdrop_path})`}}>
            <div className={'movie__info'}>
                <h1 className={'movie__title'}>{title}
                <span
                    className={'movie__date'}> {movie?.release_date && new Date(movie?.release_date!).getFullYear()}
                </span>
                </h1>
                <p className={'movie__overview'}>{movie?.overview}</p>
                <div className={'genres-list'}>
                    {movie?.genres.map(item => {
                        return <span className={'genre'}
                                     onClick={() => handleGangesClick(item.id)}
                                     key={item.id}>{item.name}</span>
                    })}
                </div>
                <div className={'movie__actions'}>
                    {trailerId && <PlayBtn onTrailerPlay={() => setIsPlaying(true)}/>}
                    <AddToFavBtn/>
                </div>
            </div>
            {isPlaying && <Trailer opts={opts}
                                   trailerId={trailerId!}
                                   onEnd={() => setIsPlaying(false)}/>}
        </main>
    );
}

export default MovieDetail;
