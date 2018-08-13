import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import fire from './fire';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
import Header from './komponen/Header';
import Home from './komponen/Home';
import Profile from './komponen/Profile';
import Navbar from './komponen/navbar'
import Profpic from './komponen/profpic'
import datadiri from './komponen/datadiri'

class App extends Component {
  render() {
    const store= createStore(reducers,{},applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <div>
            <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/datadiri" component={datadiri}/>
                  <Route path="/activity" component={Profile}/>
                  <Route path="/header" component={Header}/> 
                  <Route path="/navbar" component={Navbar}/>  
                  <Route path="/profpic" component={Profpic}/>
                  
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;

