import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Navbar state={props.state} />
      <main className="main">
        <Header />
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
           <Route path='/users' render={ () => <UsersContainer /> } />
          {/*<Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
