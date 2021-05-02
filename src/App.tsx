import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home';
import {FilmsProvider} from "./context/GlobalState";


function App() {
    return (
        <Router>
            <FilmsProvider>
                <Header/>
                {/*<Route exact path={'/'} component={Home}/>*/}
                <Home/>
            </FilmsProvider>
        </Router>
    );
}

export default App;
