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

// Topic component css
export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 20px 0 10px 0;
  margin-left: -16px;
  border-bottom: 1px solid #dcdcdc;
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

// article list component css
export const ListItem = styled.div`
  overflow: hidden;
  padding: 2% 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    width: 20%;
    height: 120px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 80%;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 18px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 3% 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

// recommend component css
export const RecommendWrapper = styled.div`
  margin: 4% 8%;
  width: 60%;
`;

export const RecommendItem = styled.div`
  width: 90%;
  margin: 2% 0;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

// writer component css
export const WriterWrapper = styled.div`
  margin: 4% 8%;
  width: 60%;
  height: 300px;
  border-bottom: 1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align: center;
`;

//回到顶部
export const BackTop = styled.div`
  position: fixed;
  right: 5%;
  bottom: 100px;
  width: 6%
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;