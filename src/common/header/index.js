import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
} from './style'
 class Header extends Component{

  constructor(props){
    super(props);
    this.state={
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

   handleInputFocus(){
    this.setState({
      focused: true
    })
   }
   handleInputBlur(){
     this.setState({
       focused: false
     })
   }

  render(){
    return(
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont icon-Aa"></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in
              ClassNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused': ''}
                onFocus = {this.handleInputFocus}
                onBlur = {this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont icon-fangdajing': 'iconfont icon-fangdajing'}></i>
          </SearchWrapper>
          <Addition>
            <Button className='writing'>
              <i className="iconfont icon-icon-test"></i>
              写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;