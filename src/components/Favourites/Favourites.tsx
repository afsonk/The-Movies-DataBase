import React from "react";
import {Film, Container,useLocalStorage} from "../shared";

const Favourites: React.FC = () => {
    const [state] = useLocalStorage('films');
    const handleEmptyFav = () => {
        if(Array.isArray(state)){
            if(!state.length) return <p className={'search__error'}>Find movies or tv-series and add it to Favorites</p>;
        }

    }

    return (
        <main className={'home'}>
            <Container>
                <div className={'films'}>
                    {Array.isArray(state) &&
                    state.map(item => <Film key={item?.id} {...item}/>)
                    }
                </div>
                {handleEmptyFav()}
            </Container>
        </main>
    )
};

export default Favourites;

