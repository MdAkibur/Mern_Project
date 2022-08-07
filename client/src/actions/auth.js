import { AUTH } from '../constants/actionTypes';

import * as api from '../api';
import { Navigate } from 'react-router-dom';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //sign in the user ..
        navigate.push('/')
        
    } catch (error) {
       console.log(error); 
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user ..
        navigate.push('/')
        
    } catch (error) {
       console.log(error); 
    }
};