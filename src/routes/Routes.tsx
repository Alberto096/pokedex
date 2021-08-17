import React from 'react';
//Router dom
import { BrowserRouter, Route } from 'react-router-dom';
//Base Web
import { Block } from 'baseui/block';
import HeaderComponent from '../components/app-nav-bar';
import Home from '../pages/Home/Home';
import PokemonId from '../pages/pokemon/Pokemon';

//Archivos del Proyecto Layout


const Routes = () => {
    return (
        <BrowserRouter>
            <Block>
                <HeaderComponent />
                <Route exact path="/" render={(props) => <Home />} />
                <Route exact path="/pokemon/:id" component={PokemonId} />
            </Block>
        </BrowserRouter>
    );
};

export default Routes;
