import React from "react";
import play from '../assets/img/play.png'


type Props = {
    onTrailerPlay: () => void
}

const SearchBtn:React.FC<Props> = ({onTrailerPlay}) => {
    return (
        <button className={'play__btn'} title={'Watch trailer'} onClick={onTrailerPlay}>
            <img src={play} alt=""/>
            <span>Trailer</span>
        </button>
    )
};

export default SearchBtn;
// style="enable-background:new 0 0 330 330;"