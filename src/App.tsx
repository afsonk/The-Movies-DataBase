import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import {FilmsProvider} from "./context/GlobalState";
import Favourites from "./components/Favourites";


function App() {
    return (
        <Router>
            <FilmsProvider>
                <Header/>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/movie/:movieId'}
                       render={(props) => <MovieDetail contentType={'movie'} id={props.match.params.movieId}/>}
                />
                <Route exact path={'/tv/:tvId'}
                    render={(props) => <MovieDetail contentType={'tv'} id={props.match.params.tvId}/>}
                    />
                <Route path={'/favourites'} component={Favourites}/>
            </FilmsProvider>
        </Router>
    );
}

export default App;
