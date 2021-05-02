import React from "react";
import {api, FilmsApi, ResponseType} from "../api/api";
import Container from "./Container";
import Film from "./Film";


const Home = () => {
    const [title, setTitle] = React.useState<string>('taxi');
    const [films, setFilms] = React.useState<ResponseType[]>([]);

    React.useEffect(() => {
        FilmsApi.getFilms(title)
            .then(res => setFilms(res.results))
    }, [title]);


    const text = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setTitle(text.current.value)
    }

    return (
        <main className={'home'}>
            <Container>
                <>
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
                </>
            </Container>
        </main>
    )
}

export default Home;