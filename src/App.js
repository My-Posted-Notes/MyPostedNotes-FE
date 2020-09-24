import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './views/styles/App.css';

import auth0 from 'auth0-js';

import LandingPage from './components/LandingPage';
import Callback from './components/Callback';
import NoteList from './components/NoteList';
import Note from './components/Note';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

// import NoteView from './views/NoteView';
// import CreateNoteView from './views/CreateNoteView';
// import EditNoteView from './views/EditNoteView';
// import LandingPageView from './views/LandingPageView';


let redirect_URL = (process.env.NODE_ENV === 'development')
            ? process.env.REACT_APP_REDIRECT_URL
            : process.env.REACT_APP_REDIRECT_URL_PRODUCTION;

// var lock = new Auth0Lock(
//     process.env.REACT_APP_AUTH0_CLIENT_ID,
//     process.env.REACT_APP_AUTH0_DOMAIN_URL
// );

var webAuth = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN_URL,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUrl: redirect_URL,
    // responseType: 'token id_token',
    scope: 'openid'
});

webAuth.parseHash((err, authResult) => {
    if (authResult) {
        console.log(authResult);
        // Save the tokens from the authResult in local storage
        let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("expires_at", expiresAt);     
    } else if (err) {
        // Handle errors
        console.log(err);
    }
});

class App extends Component {

    isAuthenticated() {
            // Check whether the current time is past the
            // Access Token's expiry time
            let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
    }
    logout() {
            // Clear Access Token and ID Token from local storage
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_at');
            window.location.reload();
    }
    render() {
        if (this.isAuthenticated()){
            return (
            <div className="App">
                <nav className="navigation-panel">
                    <h1>My Posted Notes</h1><br></br>
                    <div className="nav-botton-container">
                            <button className="navigation-button" onClick={() => this.props.history.push("/")} >
                                    View Your Notes</button>
                            <button className="navigation-button" onClick={() => this.props.history.push("/create-note")}>
                                    + Create New Notes</button>
                            <button className="navigation-button" onClick={()=> this.logout()}>Log Out</button>
                    </div>                        
                </nav>  
                <div className="display-panel">                           
                    <div className="route-container">
                        <Route path="/callback" 
                            component={Callback}/>
                        <Route  path="/note/:id"
                            component={Note}/>
                        <Route  path='/create-note'
                            component={CreateNote}/>
                        <Route  path='/edit/:id'
                            component={EditNote}/>
                        <Route exact path="/"
                            component={NoteList}/>
                    </div>                    
                </div>
            </div>
            );
        }      
        else{
            return(
                <LandingPage/>
            //     <div>
            //         <h1 id="title">Welcome to MyPostedNotes</h1>
            //         <nav>
            //             <div id="login" onClick={function(){
            //                 lock.show();}}>LOG IN
            //             </div>
            //         </nav>
            //     </div>
            )
        }         
    }        
}

const mapStateToProps = state => {
        state = state.rootReducer; // pull values from root reducer state
        return {
            user_id: state.user_id
        }
      }
      
export default withRouter(connect(mapStateToProps, {
        //  // actions
        // getCurrentUser,
        // checkEmail,
})(App));

