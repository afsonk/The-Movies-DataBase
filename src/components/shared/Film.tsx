import React, {useState} from "react"
import {Link} from "react-router-dom";
import {api, ResponseType} from "../../types/types";
import Loader from "./Loader"


const Film: React.FC<ResponseType> = React.memo((({...item}) => {
        const [imageLoading, setImageLoading] = useState(true)

        const linkTo = item.original_title ? 'movie' : 'tv';
        const title = item.original_title ? item.original_title : item.original_name;

        const handleImageLoad = () => setImageLoading(false)

        return (
            <>
                {item.poster_path &&
                    <div className={'film__item'}>
                        {imageLoading && <Loader/>}
                        <Link to={`/${linkTo}/${item.id}`} style={{display: imageLoading ? 'none' : 'block'}}>
                            <img className={'film__img'}
                                 src={`${api.mediumImg}${item.poster_path}`}
                                 alt={item.title}
                                 onLoad={handleImageLoad}
                            />
                        </Link>
                        <div className={'film__overlay'}>{title}</div>
                    </div>
                }
            </>
        )
    }
));

export default Film;

