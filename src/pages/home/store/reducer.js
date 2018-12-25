import { fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
  ],
});

export default (state = defaultState, action) =>{
  switch (action.type) {
    default:
      return state;
  }
}