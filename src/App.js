import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import fire from './fire';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import Header from './komponen/Header';
import Home from './komponen/Home';
import Profile from './komponen/Profile';
import button from './komponen/button'
import Navbar from './komponen/navbar'
import Profpic from './komponen/profpic'


class App extends Component {
  render() {
    const store= createStore(reducers)
    return (
      <Provider store={store}>
        <div>
            <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/article" component={Profile}/>
                  <Route path="/header" component={Header}/>
                  <Route path="/button" component={button}/>  
                  <Route path="/navbar" component={Navbar}/>  
                  <Route path="/profpic" component={Profpic}/> 
                  
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;

