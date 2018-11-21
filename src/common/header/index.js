import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from './style';

const Header = (props) =>{
  return(
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont icon-Aa"/>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            timeout={300}
            in={props.focused}
            classNames={{
              enter: 'slide-enter',
              enterActive: 'slide-enter-active',
              exit: 'slide-exit',
              exitActive: 'slide-exit-active',
            }}
          >
            <NavSearch
              className={props.focused ? 'focused': ''}
              onFocus = {props.handleInputFocus}
              onBlur = {props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont icon-fangdajing': 'iconfont icon-fangdajing'}/>
        </SearchWrapper>
        <Addition>
          <Button className='writing'>
            <i className="iconfont icon-icon-test"/>
            写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => {
  return{
    focused: state.header.focused,
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      };
      dispatch(action)
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action)
    },
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
