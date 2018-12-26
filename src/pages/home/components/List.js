import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo,
} from '../style';

class List extends Component {
  render() {
    const { articleList } = this.props;
    return (
      articleList.map((item)=>(
        <ListItem key={item.get('id')}>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='desc'>{item.get('desc')}</p>
          </ListInfo>
          <img className='pic' alt={item.get('title')} src={item.get('imgUrl')}/>
        </ListItem>
      ))
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home','articleList'])
});

export default connect(mapState,null)(List);