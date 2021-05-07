import React, {useState} from "react";
import {FilmsApi} from "../api/api";
import Container from "./Container";
import Film from "./Film";
import {useFilms} from "../context/GlobalState";
import {setActivePage, setFilmsInState, toggleIsFetching} from "../context/ActionCreators";
import Loader from "./Loader";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";


const Home = () => {
    const {state, dispatch} = useFilms();

    const {title, results, isFetching, isSearching, total_pages, page} = state;

    React.useEffect(() => {
        dispatch(toggleIsFetching(true));
        FilmsApi.getFilms(title, page)
            .then(res => {
                dispatch(setFilmsInState(res))
                dispatch(toggleIsFetching(false));
            });
    }, [title, page]);

    const handlePageClick = ({selected: selectedPage}: {selected: number}) => {
        window.scrollTo(0,0);
        dispatch(setActivePage(selectedPage + 1));
    }

    const showPreloadImage = (): boolean => {
        if(isFetching && title && !results){
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
                            : results?.map((item) => {
                                return (
                                    <Film key={item.id} {...item} />
                                )
                            })
                    }
                </div>
                {total_pages ? <Pagination onPageChange={handlePageClick} totalPages={total_pages!}/> : null}
            </Container>
        </main>
    )
}

export default Home;