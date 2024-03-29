import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Navbar state={props.state} />
      <main className="main">
        <HeaderContainer />
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
           <Route path='/users' render={ () => <UsersContainer /> } />
           <Route path='/login' render={ () => <Login /> } />
          {/*<Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
