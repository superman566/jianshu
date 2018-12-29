import React, { Component } from 'react'
import { connect } from 'react-redux';
import Topic from './components/Topics';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
} from './style';
import { actionCreators } from './store';

class Home extends Component {
  handleScrollTop = () =>{
    window.scrollTo(0,0);
  };

  bindEvents = () =>{
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  };

  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='stories' src="//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null
        }
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 400){
      const action = actionCreators.toggleTopShow(true);
      dispatch(action);
    } else {
      const action = actionCreators.toggleTopShow(false);
      dispatch(action);
    }
  }
});

export default connect (mapState, mapDispatch)(Home);