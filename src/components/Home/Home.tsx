import React from "react";
import {FilmsApi} from "../../api/api";
import {Container,Pagination, Film} from "../shared";
import {useFilms} from "../../context/GlobalState";
import {setActivePage, setFilmsInState, toggleIsFetching} from "../../context/ActionCreators";
import Loader from "./Loader";
import SearchBox from "./SearchBox";


const Home: React.FC = () => {
    const {state, dispatch} = useFilms();
    const {title, results, isFetching, isSearching, total_pages, page, total_results} = state;


    const handleError = (results: Array<any> | null, title: string) => {
        if (!isSearching) {
            if (!title && !results?.length) return <p className={'search__error'}>Type to search</p>;
        }
        if (title && !results?.length) return <p className={'search__error'}>{`No results found for "${title}"`}</p>;
        return;
    }

    const onPageClick = (pageNumber: number) => {
        window.scrollTo(0,0);
        dispatch(setActivePage(pageNumber));
    }

    React.useEffect(() => {
        dispatch(toggleIsFetching(true));
        if(title){
            FilmsApi.getFilms(title, page)
                .then(res => {
                    dispatch(setFilmsInState(res));
                }).finally(() => {
                dispatch(toggleIsFetching(false));
            });
        }
    }, [title, page]);

    return (
        <main className={'home'}>
            <Container>
                {isSearching && <SearchBox isSearching={isSearching} dispatch={dispatch} title={title}/>}
                <div className={'films'}>
                    {
                        isFetching && title && !total_pages
                            ? Array(19).fill(null).map((__, i) => {
                                return <Loader key={i + "1"}/>
                            })
                            : results?.map((item) => {
                                return (
                                    <Film key={item?.id} {...item} />
                                )
                            })
                    }
                </div>
                {handleError(results, title)}
                {total_results! > 1 && <Pagination currentPage={page}
                                                onPageChanged={onPageClick} totalPages={total_pages!}
                />}
            </Container>
        </main>)
}

export default Home;