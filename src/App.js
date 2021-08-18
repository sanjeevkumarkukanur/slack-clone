import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit'

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <AppLoading>
      <AppLoadingContainer>
      <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Slack_colored_svg-512.png"
            alt=""
          />

        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </AppLoadingContainer>
    </AppLoading>
    )
  }


  return (
    <Router>
      {!user ? 
      (<Login />):(
        <>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
        </>
      )} 
    </Router>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContainer = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  >img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`; 

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
