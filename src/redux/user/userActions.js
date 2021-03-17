import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './userTypes';
import axios from 'axios';

export const fetchUsersRequest = () => {
    return{
        type: USER_REQUEST,
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: USER_SUCCESS,
        payload: users,
    }
}

export const fetchUsersFailure = (error) => {
    return{
        type: USER_FAILURE,
        payload: error,
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        }).catch(error => {
            const errorMessage = error.message
            dispatch(fetchUsersFailure(errorMessage))
        })
    }
}