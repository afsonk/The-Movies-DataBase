import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home';
import MovieDetail from './components/Movie';
import {FilmsProvider} from "./context/GlobalState";


function App() {
    return (
        <Router>
            <FilmsProvider>
                <Header/>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/movie/:movieId'} component={MovieDetail}/>
            </FilmsProvider>
        </Router>
    );
}

export default App;
