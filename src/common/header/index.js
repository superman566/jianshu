import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

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
    if(this.props.focused){
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item)=>{
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else{
      return null;
    }
  }

  render() {
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
              in={this.props.focused}
              classNames={{
                enter: 'slide-enter',
                enterActive: 'slide-enter-active',
                exit: 'slide-exit',
                exitActive: 'slide-exit-active',
              }}
            >
              <NavSearch
                className={this.props.focused ? 'focused': ''}
                onFocus = {this.props.handleInputFocus}
                onBlur = {this.props.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont icon-fangdajing': 'iconfont icon-fangdajing'}/>
            {this.getListArea()}
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
  }
}

const mapStateToProps = (state) => {
  return{
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
