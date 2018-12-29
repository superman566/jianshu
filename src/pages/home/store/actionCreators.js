import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const getHomeInfo = () =>{
  return (dispatch) =>{
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: constants.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
      };
      dispatch(action);
    });
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' +page).then((res) => {
      const result = res.data.data;
      const action = {
        type: constants.ADD_ARTICLE_LIST,
        list: fromJS(result),
        nextPage: fromJS(page+1)
      };
      dispatch(action);
    });
  }
};

export const toggleTopShow = (show) =>({
  type: constants.TOGGLE_SCROLL_TOP,
  show,
});