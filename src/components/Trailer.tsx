import React from 'react';
import YouTube from "react-youtube";
import { options } from '../types/types';

type Props = {
    trailerId: string,
    opts: any
}

const Trailer = ({trailerId, opts}: Props) => {
    return <>
        <YouTube
            videoId={trailerId}
            opts={opts}
            className={'trailer'}
            containerClassName={'trailer__container'}
        />
    </>
}

export default Trailer;