import axios from 'axios';
import { setAlert } from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

// LOGIN FUNCTION
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`http://localhost:8000/api/token/`, body, config);
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, body, config);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        
        dispatch(setAlert('Authenticated successfully', 'success'));

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));

    }
}


// SIGNUP FUNCTION
export const signup = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2 });

    try {
        const res = await axios.post(`http://localhost:8000/api/accounts/signup`, body, config);
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/accounts/signup`, body, config);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        
        dispatch(login(email, password));

    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));

    }
};

// LOGOUT FUNCTION
export const logout = () => dispatch => {
    dispatch(setAlert('logout successfull.', 'success'));
    dispatch({ type: LOGOUT })
}