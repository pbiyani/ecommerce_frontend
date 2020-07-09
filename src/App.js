import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Register from './components/Registration';
import Login from './components/Login';
//import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             {/* <Route path="/" component={Register} exact/> */}
             <Route path="/Registration" component={Register}/>
            <Route path="/Login" component={Login}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;