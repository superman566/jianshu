import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends PureComponent {
  render() {
    const { articleList, page, getMoreList } = this.props;
    return (
      <div>
        {
          articleList.map((item, index)=>(
            <ListItem key={index}>
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
              <img className='pic' alt={item.get('title')} src={item.get('imgUrl')}/>
            </ListItem>
          ))
        }
        <LoadMore onClick={()=>{getMoreList(page)}}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  articleList: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage']),
});

const mapDispatch = (dispatch)=>({
  getMoreList(page){
    dispatch(actionCreators.getMoreList(page))
  }
});
export default connect(mapState,mapDispatch)(List);