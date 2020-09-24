import React from 'react';
import {Auth0Lock} from 'auth0-lock';

const LandingPage = () =>{
    var lock = new Auth0Lock(
        process.env.REACT_APP_AUTH0_CLIENT_ID,
        process.env.REACT_APP_AUTH0_DOMAIN_URL
    );
    return(
        <div>
            <h1 id="title">Welcome to MyPostedNotes</h1>
            <nav>
                <div id="login" onClick={function(){
                        lock.show();}}>LOG IN
                </div>
            </nav>
            
        </div>
    )
}

export default LandingPage;