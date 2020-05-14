export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
import axios from 'axios';

export const signup = (email, password) => {
    return async dispatch => {
        const data = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1XcC-uvhK36KY5z8n-CE2RSamfYkGPPs', {
            email: email,
            password: password,
            returnSecureToken: true,
        });
        console.log(data);

        dispatch({type: SIGNUP, token: data.data.idToken, userId: data.data.localId})
    }
}

export const signin = (email, password) => {
    return async dispatch => {
        const data = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1XcC-uvhK36KY5z8n-CE2RSamfYkGPPs', {
            email: email,
            password: password,
            returnSecureToken: true,
        });
        console.log('data from signin', data);

        dispatch({type: SIGNIN, token: data.data.idToken, userId: data.data.localId})
    }
}