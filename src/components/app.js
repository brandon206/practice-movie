import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import {Route} from 'react-router-dom';
import Home from "./home";
import Nav from './nav';
import PopularGames from './popular-games';
import SignIn from './sign-in';
import SignUp from './sign-up';

const App = () => (
    <div>
        <Nav/>
        <div className = "container">
            <Route exact path = "/" component = {Home}/>
            <Route path = "/popular-games" component = {PopularGames}/>
            <Route path = "/sign-in" component = {SignIn}/>
            <Route path = "/sign-up" component = {SignUp}/>
        </div>
    </div>
);

export default App;
