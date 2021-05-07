import React from "react";
import Container from "./Container";
import useLocalStorage from "../LocalStorage/useLocalStorage";
import Film from "./Film";

const Favourites: React.FC = () => {
    const [state, setState] = useLocalStorage('films');

    return (
        <main className={'home'}>
            <Container>
                <div className={'films'}>
                    {Array.isArray(state) &&
                    state.map(item => <Film key={item?.id} {...item}/>)
                    }
                </div>
            </Container>
        </main>
    )
};

export default Favourites;

