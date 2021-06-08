import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import {Home, Header, MovieDetail, Favourites, Login, Signup, PrivateRoute} from "./components"
import {FilmsProvider} from "./context/FilmsState"
import {AuthProvider} from "./context/AuthState"


function App() {
    return (
        <Router>
            <FilmsProvider>
                <AuthProvider>
                    <Header/>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/movie/:movieId'}
                           render={(props) => <MovieDetail contentType={'movie'} id={props.match.params.movieId}/>}
                    />
                    <Route exact path={'/tv/:tvId'}
                           render={(props) => <MovieDetail contentType={'tv'} id={props.match.params.tvId}/>}
                    />
                    <PrivateRoute exact path={'/favorites'} component={Favourites}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/signup'} component={Signup}/>
                </AuthProvider>
            </FilmsProvider>
        </Router>
    )
}

export default App
