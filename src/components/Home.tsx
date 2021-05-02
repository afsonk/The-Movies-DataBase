import React from "react";
import {FilmsApi} from "../api/api";
import Container from "./Container";
import Film from "./Film";
import { useFilms} from "../context/GlobalState";
import {setFilmsInState, setFilmTitle} from "../context/ActionCreators";


const Home = () => {

    const {state, dispatch} = useFilms();

    const {title, films} = state;

    React.useEffect(() => {
        FilmsApi.getFilms(title, 2)
            .then(res => dispatch(setFilmsInState(res.results)))
    }, [title]);


    React.useEffect(() => {
       FilmsApi.getFilms('fight club', 2)
           .then(res => console.log(res))
    },[])

    const text = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(setFilmTitle(text.current.value));
    }

    return (
        <main className={'home'}>
            <Container>
                    <form onSubmit={handleSubmit}>
                        <input ref={text} type={'text'} name={'filmName'}/>
                    </form>
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