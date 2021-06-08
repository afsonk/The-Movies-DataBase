import React from "react"
import {Film, Container} from "../shared"
import {useAuth} from "../../context/AuthState"
import {useFilms} from "../../context/FilmsState"
import {setFavoriteMovie} from "../../context/ActionCreators"


const Favourites: React.FC = () => {
    const {state, dispatch} = useFilms()
    const {getUserData} = useAuth()

    const handleEmptyFav = () => {
        if (Array.isArray(state.favorites)) {
            if (!state.favorites.length) return <p className={'search__error'}>Find movies or tv-series and add them to
                Favorites</p>
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
        const fetchData = async () => {
            const data = await getUserData()
            return data
        }
        fetchData().then(data => dispatch(setFavoriteMovie(data?.favorites)))
    }, [])

    return (
        <main className={'home'}>
            <Container>
                <div className={'films'}>
                    {
                        state.favorites?.map((item) => {
                            return (
                                <Film key={item?.id} {...item} />
                            )
                        })
                    }
                </div>
                {handleEmptyFav()}
            </Container>
        </main>
    )
}

export default Favourites
