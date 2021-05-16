import React from 'react';
import YouTube from "react-youtube";


type Props = {
    trailerId: string,
    opts: any,
    onEnd: () => void
}

const Trailer = ({trailerId, opts, onEnd}: Props) => {
    return <>
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