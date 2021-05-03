import React from "react";
import {FilmsApi} from "../api/api";
import Container from "./Container";
import Film from "./Film";
import { useFilms} from "../context/GlobalState";
import {setFilmsInState} from "../context/ActionCreators";


const Home = () => {

    const {state, dispatch} = useFilms();

    const {title, films} = state;

    React.useEffect(() => {
        FilmsApi.getFilms(title, )
            .then(res => dispatch(setFilmsInState(res.results)))
    }, [title]);


    React.useEffect(() => {
       FilmsApi.getFilms()
           .then(res => console.log(res))
    },[])


    return (
        <main className={'home'}>
            <Container>
                    <div className={'films'}>
                        {
                            films.map((item) => {
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