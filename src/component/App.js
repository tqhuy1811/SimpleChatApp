import React, { Component } from 'react';
import ChatRoom from './chatRoom'
import Name from './Name'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header'
import AboutUs from './us'
class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/us" component={AboutUs}/>
            <Route exact path="/chatRoom" component={ChatRoom}/>
            <Route exact path="/" component={Name}/>  
          </div>
         </BrowserRouter> 
      </div>
    );
  }
}

export default App;
