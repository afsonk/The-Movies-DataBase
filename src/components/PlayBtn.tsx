import React from "react";
import play from '../assets/img/play.png'


const SearchBtn = () => {
    return (
        <button className={'play__btn'}>
            <img src={play} alt=""/>
            <span>Trailer</span>
        </button>
    )
};

export default SearchBtn;
// style="enable-background:new 0 0 330 330;"