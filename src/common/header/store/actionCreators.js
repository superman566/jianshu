import * as constants from './constants';
import axios from 'axios';
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getList = () => {
 return (dispatch) => {
   console.log('123');
   axios.get('/api/headerList.json').then((res) =>{

   }).catch(()=>{
     console.log('call api error')
   })
 }
};