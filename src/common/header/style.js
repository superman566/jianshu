import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom: 1px solid #f0f0f0
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  height:56px;
  width:100px;
  position: absolute;
  top:0;
  left:0;
  display:block;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width:75%;
  height:100%;
  margin:0 10%;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
    &.left{
      float:left;
    }
    &.right{
      float:right;
      color:#969696;
    }
    &.active{
    color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    padding:0 0 0 8px;
    line-height:30px;
    border-radius:15px;
    test-align: center;
    &.focused{
      background:#777;
      color:#fff;
    }
    
  }
  
`;

export const NavSearch = styled.input.attrs({
  placeholder:'search'
})`
  width:200px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding:0 35px 0 20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#777;
  &.focused{
  width:250px
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
    }
  &.slide-enter-active{
    width:250px;
    }
  &.slide-exit {
    transition:all .2s ease-out;
    }
  &.slide-exit-active{
    width:200px;
    }
`;

export const Addition = styled.div`
  position: absolute;
  height:56px;
  right:0;
  top:0;
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border: 1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    background:#ec6149;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top:56px;
  width:240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0, .2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overfilow:hidden;
`;

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height: 20px;
  padding:0 5px;
  font-size:12px;
  border: 1px solid #ddd;
  color:#787878;
  border-radius: 3px;
  margin-right:10px;
  margin-bottom:10px;
`;