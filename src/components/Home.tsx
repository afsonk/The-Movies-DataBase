import React from "react";
import {FilmsApi} from "../api/api";
import Container from "./Container";
import Film from "./Film";
import {useFilms} from "../context/GlobalState";
import {setActivePage, setFilmsInState, toggleIsFetching} from "../context/ActionCreators";
import Loader from "./Loader";
import SearchBox from "./SearchBox";


const Home = () => {
    const {state, dispatch} = useFilms();

    const {title, results, isFetching, isSearching, total_pages, page, total_results} = state;

    React.useEffect(() => {

        !results && dispatch(toggleIsFetching(true));
        FilmsApi.getFilms(title, page)
            .then(res => {
                dispatch(setFilmsInState(res))
                dispatch(toggleIsFetching(false));
            })
    }, [title, page]);

    const handlePageClick = (page: number) => {
        console.log(page)
        dispatch(setActivePage(page));
        window.scrollTo(0,0);
    }


    return (
        <main className={'home'}>
            <Container>
                {isSearching && <SearchBox isSearching={isSearching} dispatch={dispatch} title={title}/>}
                <div className={'films'}>
                    {
                        isFetching && title
                            ? Array(20).fill(null).map((__, i) => {
                                return <Loader key={i + "1"}/>
                            })
                            : results?.map((item) => {
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