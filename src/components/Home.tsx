import React from "react";
import {FilmsApi} from "../api/api";
import Container from "./Container";
import Film from "./Film";
import {useFilms} from "../context/GlobalState";
import {setFilmsInState, toggleIsFetching} from "../context/ActionCreators";
import Loader from "./Loader";
import SearchBox from "./SearchBox";


const Home = () => {

    const {state, dispatch} = useFilms();

    const {title, films, isFetching, isSearching} = state;

    React.useEffect(() => {
        dispatch(toggleIsFetching(true));
        FilmsApi.getFilms(title,)
            .then(res => {
                console.log(res)
                dispatch(setFilmsInState(res))
                dispatch(toggleIsFetching(false));
            });
    }, [title]);

    const showPreloadImage = (): boolean => {
        if(isFetching && title && !films?.results){
            return true;
        }
        return false;
    }

    return (
        <main className={'home'}>
            <Container>
                {isSearching && <SearchBox isSearching={isSearching} dispatch={dispatch} title={title}/>}
                <div className={'films'}>
                    {
                        showPreloadImage()
                            ? Array(20).fill(null).map((__, i) => {
                                return <Loader key={i + "1"}/>
                            })
                            : films?.results.map((item) => {
                                return (
                                    <Film key={item.id} {...item} />
                                )
                            })
                    }
                </div>
            </Container>
        </main>
    )
}

export default Home;