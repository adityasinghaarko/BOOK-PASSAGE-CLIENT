import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleIcon from '../../Images/Group 573.png'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [signedInUser, setSignedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
                var {displayName, email} = result.user;
                const signedInUser = {
                    name : displayName, 
                    email : email
                }
                setSignedInUser(signedInUser);
                storeAuthToken()
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });
        
            const storeAuthToken = () => {
                firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem('token', idToken)
                }).catch(function (error) {
                    // Handle error
                });
            }
    }

    const buttonStyle = {
        borderRadius: "15px",
        padding: "10px"
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={googleSignIn} style={buttonStyle}><img style={{ width: '20px' }} src={googleIcon} alt="" /> Continue with Google</button>
        </div>
    );
};

export default Login;