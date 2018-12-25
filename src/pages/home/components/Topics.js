import React, { Component } from 'react';
import {
  TopicWrapper,
  TopicItem,
} from '../style';

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        <TopicItem>
          <img
            className= 'topic-pic'
            alt='社会热点'
            src="http://upload-images.jianshu.io/upload_images/12579077-98b978bded9d2531.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          社会热点
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic;