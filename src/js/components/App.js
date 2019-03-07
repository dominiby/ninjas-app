import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import Shipping from './Shipping';
import Home from './Home';
import logo from '../../images/logo.jpg';
import '../../styles/Variables.scss';
import '../../styles/App.scss';
import '../../styles/media_queries/LG.scss';
import '../../styles/media_queries/MD.scss';
import '../../styles/media_queries/S.scss';
import '../../styles/media_queries/XS.scss';
import '../../styles/media_queries/XXS.scss';

export default function App() {
  return (
    <BrowserRouter>
    <div id="main-wrapper">
      <header className="header">
        <img id="logo" alt="Logo" src={logo}/>
      </header>
      <h1>Front-end Developer</h1>
      <div id="content-wrapper">
        <div id="content-container">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/cart' component={Cart} />
            <Route path='/shipping' component={Shipping} />
          </Switch>
        </div>
        <div id="red-placeholder"></div>
      </div>
    </div>
    </BrowserRouter>
  );
}