import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

export const getDetail = () => {
  return (dispatch) =>{
    axios.get('/api/detail.json').then((res) =>{
      const result = res.data.data;
      const action = {
        type: constants.CHANGE_DETAIL,
        title: fromJS(result.title),
        content: fromJS(result.content)
      };
      dispatch(action);
    })
  }
};