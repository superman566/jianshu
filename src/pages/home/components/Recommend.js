import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  RecommendWrapper,
  RecommendItem,
} from '../style'

class Recommend extends Component {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item)=>(
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
          ))
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  // topicList: state.get('home').get('topicList')
  recommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapState, null)(Recommend);