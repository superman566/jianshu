import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

export const login = (account, password) => {
  return (dispatch) =>{
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      const result = res.data.data;
      if(result){
        const action = {
          type: constants.CHANGE_LOGIN,
          login: fromJS(result),
        };
        dispatch(action);
      } else {
        alert('login fail')
      }
    })
  }
};

export const logout = () => {
  return (dispatch) =>{
    const action = {
      type: constants.CHANGE_LOGOUT,
      login: false,
    };
    dispatch(action);
  }
};