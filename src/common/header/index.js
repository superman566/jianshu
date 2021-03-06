import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style';

class Header extends Component {
  getListArea() {
    const { focused, list, totalPage, page,mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i = (page-1) * 5; i < page * 5; i ++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )}
    }
    if(focused || mouseIn){
      return (
        <SearchInfo
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={ ()=>{handleChangePage(page,totalPage, this.spinIcon)} }
            >
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont icon-spin spin"/>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else{
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          {
            login?
              <NavItem className='right' onClick={logout}>退出</NavItem> :
              <Link to={'/login'}>
                <NavItem className='right'>登录</NavItem>
              </Link>
          }

          <NavItem className='right'>
            <i className="iconfont icon-Aa"/>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={300}
              in={focused}
              classNames={{
                enter: 'slide-enter',
                enterActive: 'slide-enter-active',
                exit: 'slide-exit',
                exitActive: 'slide-exit-active',
              }}
            >
              <NavSearch
                className={focused ? 'focused': ''}
                onFocus = {()=>{handleInputFocus(list)}}
                onBlur = {handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont icon-fangdajing zoom': 'iconfont icon-fangdajing zoom'}/>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to={'/write'}>
              <Button className='writing'>
                <i className="iconfont icon-icon-test"/>
                写文章
              </Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page:  state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
    login: state.get('login').get('login'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage, spin){
      // 转一转动画
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle + 180) +'deg)';
      if (page < totalPage){
        dispatch(actionCreators.changePage(page+1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
