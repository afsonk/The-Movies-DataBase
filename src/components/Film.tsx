import React from "react"
import {Link} from "react-router-dom";
import {api, ResponseType} from "../types/types";


const Film: React.FC<ResponseType> = (({...item}) => {
        return (
            <div className={'film__item'}>
            <Link to={`/movie/${item.id}`}>
                <img className={'film__img'} src={`${api.mediumImg}${item.poster_path}`} alt={item.title}/>
            </Link>
            <div className={'film__overlay'}>{item.original_title}</div>
        </div>
        )
    }
);

export default Film;

//