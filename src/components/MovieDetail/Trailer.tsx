import React from 'react';
import YouTube from "react-youtube";
import CloseButton from './CloseButton';


type Props = {
    trailerId: string,
    opts: any,
    onEnd: () => void
}

const Trailer = ({trailerId, opts, onEnd}: Props) => {

    React.useEffect(() => {
        window.scrollTo(0,0);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    },[])
    return <>
        <CloseButton onClick={onEnd}/>
        <YouTube
            videoId={trailerId}
            opts={opts}
            className={'trailer'}
            containerClassName={'trailer__container'}
            onEnd={onEnd}
        />
    </>
}

export default Trailer;