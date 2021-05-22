import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Support from './components/Support';
import Login from './components/Login';
import Home from './components/Home';
import Sse from './components/Sse';
import Group_1 from './components/Group_1';
import Group_2 from './components/Group_2';
import Group_3 from './components/Group_3';
import Group_4 from './components/Group_4';
import Group_5 from './components/Group_5';
import Group_6 from './components/Group_6';
import Group_7 from './components/Group_7';
import End from './components/End';
import Enddip from './components/Enddip';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ backgroundImage: 'url(https://static.mindvalley.com/public/assets/2020/04/pwEu_lh_sp_bg_top.jpg)'
          ,backgroundRepeat: 'no-repeat',height :'200vh' }}>
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/support' component={Support}/>
            <Route exact path='/login' component={Login}/>
          </Switch> 
          <div>
            <Sse/>
          </div>
          <div style={{backgroundColor: '#F9FAED'}}>
            <Group_1/> 
            <Group_2/>
            <Group_3/>
            <Group_4/>
            <Group_5/>
            <Group_6/>
            <End/>
            <Enddip/>
          </div>
          <div>
            <Group_7/>
            <End/>
            <Footer/>
          </div>
      </div>
    </>
  );
}

export default App;
