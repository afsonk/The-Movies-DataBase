import React from "react"
import {api, ResponseType} from "../api/api";


const Film: React.FC<ResponseType> = (({...item}) => {
    console.log(item)
    return (
        <div className={'film__item'}>
            <img className={'film__item-img'} src={`${api.imageApi}${item.poster_path}`} alt={item.title}/>
            <div>{item.original_title}</div>
        </div>
    )
});

export default Film;

