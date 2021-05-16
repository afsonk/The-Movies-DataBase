import React from "react"
import {Link} from "react-router-dom";
import {api, ResponseType} from "../../types/types";


const Film: React.FC<ResponseType> = React.memo((({...item}) => {

        const linkTo = item.original_title ? 'movie' : 'tv';
        const title = item.original_title ? item.original_title : item.original_name;

        return (
            <>
                {item.poster_path &&
                    <div className={'film__item'}>
                        <Link to={`/${linkTo}/${item.id}`}>
                            <img className={'film__img'} src={`${api.mediumImg}${item.poster_path}`} alt={item.title}/>
                        </Link>
                        <div className={'film__overlay'}>{title}</div>
                    </div>
                }
            </>
        )
    }
));

export default Film;

