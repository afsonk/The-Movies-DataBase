import {
    SET_FILMS_IN_STATE,
    SET_FILM_TITLE,
    SET_MOVIE_DETAILS,
    CLEAR_MOVIE_DETAILS,
    TOGGLE_IS_FETCHING, TOGGLE_SEARCH_BAR, SET_ACTIVE_PAGE, SET_MOVIE_TRAILER
} from "../context/Constans";
import React, {Dispatch} from "react";


//films array response
const obj = {
    adult: false,
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    genre_ids: [18],
    id: 550,
    original_language: "en",
    original_title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    popularity: 37.668,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: "1999-10-15",
    title: "Fight Club",
    video: false,
    vote_average: 8.4,
    vote_count: 21618,
}

const objTv = {
    "backdrop_path": "/qjUqBVLUPX1Pc4cyYljZfAJHf8N.jpg",
    "first_air_date": "1994-09-22",
    "genre_ids": [
        35,
        18
    ],
    "id": 1668,
    "media_type": "tv",
    "name": "Friends",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "Friends",
    "overview": "The misadventures of a group of friends as they navigate the pitfalls of work, life and love in Manhattan.",
    "popularity": 158.205,
    "poster_path": "/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    "vote_average": 8.4,
    "vote_count": 4435

}

const singleMovie = {
    adult: false,
    backdrop_path: "/6VmFqApQRyZZzmiGOQq2C92jyvH.jpg",
    belongs_to_collection: null,
    budget: 200000000,
    genres: [{id: 18, name: "Drama"}],
    homepage: "",
    id: 597,
    imdb_id: "tt0120338",
    original_language: "en",
    original_title: "Titanic",
    overview: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. " +
        "A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi " +
        "win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to " +
        "its death—on its first and last voyage—on April 15, 1912.",
    popularity: 81.808,
    poster_path: "/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    production_companies: [
        {id: 4, logo_path: "/fycMZt242LVjagMByZOLUGbCvv3.png", name: "Paramount", origin_country: "US"},
    ],
    production_countries: [{iso_3166_1: "US", name: "United States of America"},],
    release_date: "1997-11-18",
    revenue: 2187463944,
    runtime: 194,
    spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"},],
    status: "Released",
    tagline: "Nothing on Earth could come between them.",
    title: "Titanic",
    video: false,
    vote_average: 7.9,
    vote_count: 19107,
}

const movieTrailer = {
    "id": 597,
    "results": [
        {
            "id": "5af145869251411eae00307d",
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "key": "CHekzSiZjrY",
            "name": "Titanic | #TBT Trailer | 20th Century FOX",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer"
        }
    ]
}

const tvShow = {
    "backdrop_path": "/7gbmM2NWcqZONbp65HUWDf4wr0Q.jpg",
    "created_by": [],
    "episode_run_time": [
        23
    ],
    "first_air_date": "2019-07-12",
    "genres": [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "http://given-anime.com/",
    "id": 88040,
    "in_production": false,
    "languages": [
        "ja"
    ],
    "last_air_date": "2019-09-20",
    "last_episode_to_air": {
        "air_date": "2019-09-20",
        "episode_number": 11,
        "id": 1821974,
        "name": "Song2",
        "overview": "Mafuyu tells Ritsuka that he likes him and Ritsuka is ecstatic to find out that they both like each other but at the same time, he remembers himself saying that band members should never bring relationships into the band. However, they both decide to talk to Haruki and Akihiko about it. Haruki gives them a lecture and Akihiko congratulates them. Meanwhile, Haruki, who likes Akihiko...",
        "production_code": "",
        "season_number": 1,
        "still_path": "/jCVp3AgKkPlfrTSeajv6T1WDc2I.jpg",
        "vote_average": 0,
        "vote_count": 0
    },
    "name": "Given",
    "next_episode_to_air": null,
    "networks": [
        {
            "name": "Fuji TV",
            "id": 1,
            "logo_path": "/yS5UJjsSdZXML0YikWTYYHLPKhQ.png",
            "origin_country": "JP"
        },
        {
            "name": "Netflix",
            "id": 213,
            "logo_path": "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
            "origin_country": ""
        },
        {
            "name": "FOD",
            "id": 2763,
            "logo_path": "/rD6NQ5JxOxFG6533TAONS2ZwxUi.png",
            "origin_country": "JP"
        },
        {
            "name": "U-NEXT",
            "id": 3869,
            "logo_path": "/ydvZrfyYbBVXPDT1Tv2P6EmRmDZ.png",
            "origin_country": "JP"
        }
    ],
    "number_of_episodes": 11,
    "number_of_seasons": 1,
    "origin_country": [
        "JP"
    ],
    "original_language": "ja",
    "original_name": "ギヴン",
    "overview": "Tightly clutching his Gibson guitar, Mafuyu Satou steps out of his dark apartment to begin another day of his high school life. While taking a nap in a quiet spot on the gymnasium staircase, he has a chance encounter with fellow student Ritsuka Uenoyama, who berates him for letting his guitar's strings rust and break. Noticing Uenoyama's knowledge of the instrument, Satou pleads for him to fix it and to teach him how to play. Uenoyama eventually agrees and invites him to sit in on a jam session with his two band mates: bassist Haruki Nakayama and drummer Akihiko Kaji.",
    "popularity": 28.138,
    "poster_path": "/pdDCcAq8RNSZNk81PXYoHNUPHjn.jpg",
    "production_companies": [
        {
            "id": 42811,
            "logo_path": "/2ZPUk3aYOtKbZk1W4Kp6mfeays8.png",
            "name": "Lerche",
            "origin_country": "JP"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "JP",
            "name": "Japan"
        }
    ],
    "seasons": [
        {
            "air_date": "2019-07-12",
            "episode_count": 11,
            "id": 121356,
            "name": "Season 1",
            "overview": "",
            "poster_path": "/vmuzyiHZv3JNRVUOEAEy0YqJKsO.jpg",
            "season_number": 1
        }
    ],
    "spoken_languages": [
        {
            "english_name": "Japanese",
            "iso_639_1": "ja",
            "name": "日本語"
        }
    ],
    "status": "Ended",
    "tagline": "Can't say goodbye, I'm still drifting with your echoes",
    "type": "Scripted",
    "vote_average": 9.1,
    "vote_count": 452
}

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};

export type options = typeof opts;


export type GlobalStateType = {
    title: string,
    results: Array<ResponseType> | null,
    movie: SingleMovieResponseType | null,
    isFetching: boolean,
    isSearching: boolean,
    page: number,
    total_results: number | null,
    total_pages: number | null,
    trailerId: string | null
}

export type SingleMovieResponseType = typeof singleMovie & typeof tvShow;

export type ResponseType = typeof obj & typeof objTv;


export type TrailerResponseType = typeof movieTrailer;

export type ApiType = {
    page: number,
    results: Array<ResponseType>,
    total_results: number,
    total_pages: number
}

export enum api {
    "apiKey" = "02975dd7fd4ed626e2a5a7e13f1eae70",
    "smallImg" = "http://image.tmdb.org/t/p/w300",
    "mediumImg" = "https://image.tmdb.org/t/p/w500",
    "bigImg" = "http://image.tmdb.org/t/p/original",
    "trailer" = "https://www.youtube.com/watch?v="
}


export interface ISetFilmTitle {
    type: typeof SET_FILM_TITLE,
    text: string
}

export interface ISetFilmsInState {
    type: typeof SET_FILMS_IN_STATE,
    films: ApiType
}

export interface ISetMovieDetails {
    type: typeof SET_MOVIE_DETAILS,
    film: SingleMovieResponseType
}

export interface IClearMovieDetails {
    type: typeof CLEAR_MOVIE_DETAILS
}

export interface IToggleIsFetching {
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
}

export interface IToggleSearchBar {
    type: typeof TOGGLE_SEARCH_BAR,
}

export interface ISetActivePage {
    type: typeof SET_ACTIVE_PAGE,
    payload: number
}

export interface ISetMovieTrailer {
    type: typeof SET_MOVIE_TRAILER,
    payload: string | null
}

export type ChildrenProps = {
    children: React.ReactNode
}

export type ContextState = {
    state: GlobalStateType,
    dispatch: Dispatch<GlobalActionTypes>
}

export type GlobalActionTypes = ISetFilmTitle
    | ISetFilmsInState
    | ISetMovieDetails
    | IClearMovieDetails
    | IToggleIsFetching
    | IToggleSearchBar
    | ISetActivePage
    | ISetMovieTrailer;