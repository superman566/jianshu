import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5), //Math.ceil 向上舍入为最接近的整数
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const getList = () => {
 return (dispatch) => {
   axios.get('/api/headerList.json').then((res) =>{
     dispatch(changeList(res.data.data));
   }).catch(()=>{
     console.log('call api error!')
   })
 }
};