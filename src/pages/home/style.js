import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 76%;
  margin: 0 12%;
`;

export const HomeLeft = styled.div`
  width: 64%;
  margin-left: 1%;
  padding-top: 1.5%;
  float: left;
  .banner-img {
    width: 100%;
    height: 100%;
  }
`;

export const HomeRight = styled.div`
  width: 35%;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 20px 0 10px 0;
  margin-left: -16px;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-left: 16px;
  margin-bottom: 16px;
  padding-right: 10px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;