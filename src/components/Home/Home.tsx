import React from "react"
import {FilmsApi} from "../../api/api"
import {Container, Pagination, Film} from "../shared"
import {useFilms} from "../../context/GlobalState"
import {setActivePage, setFilmsInState} from "../../context/ActionCreators"
import './styles.scss'
import SearchBox from "./SearchBox"


const Home: React.FC = () => {
    const {state, dispatch} = useFilms()
    const {title, results, isSearching, total_pages, page, total_results, genre} = state


    const handleError = (results: Array<any> | null, title: string) => {
        if (!isSearching) {
            if (!title && !results?.length) return <p className={'search__error'}>Type to search</p>
        }
        if (title && !results?.length) return <p className={'search__error'}>{`No results found for "${title}"`}</p>
        return
    }

    const onPageClick = (pageNumber: number) => {
        window.scrollTo(0, 0)
        dispatch(setActivePage(pageNumber))
    }

    React.useEffect(() => {
        if (title && !genre) {
            FilmsApi.getFilms(title, page)
                .then(res => {
                    dispatch(setFilmsInState(res))
                })
        }
        else{
            FilmsApi.getMovieByGenre(genre!, page)
                .then(res => {
                    dispatch(setFilmsInState(res));
                })
        }
    }, [title, page, genre])

    return (
        <main className={'home'}>
            <Container>
                {isSearching && <SearchBox isSearching={isSearching} dispatch={dispatch} title={title}/>}
                <div className={'films'}>
                    {
                        results?.map((item) => {
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

export default Home