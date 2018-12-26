import { fromJS} from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    },
  ],
  articleList: [
    {
      id: 1,
      title: '冯小刚是怎么一步步变成冯裤子的？',
      desc: '10月3日，正在大家享受国庆美好假期的时刻，久未发声的范冰冰，在微博上发布了一份道歉声明，表明之前偷税漏税情况属实，并将补缴税款及罚款8.8亿人...',
      imgUrl: '//upload-images.jianshu.io/upload_images/147245-3e52bade1f93b777.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 2,
      title: '一个人妻的猎艳之旅',
      desc: '1 昕妍和她丈夫彬晨已经结婚七年了。从初识时的心动，到热恋时的甜蜜，再...',
      imgUrl: '//upload-images.jianshu.io/upload_images/7033954-55a68b79c5331258.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 3,
      title: '新版小龙女被吐槽应该去演雕，各版本小龙女哪个才最符合原著？',
      desc: '【本文系超级卡司原创，作者：冉小星，未经授权禁止转载】 新版《神雕侠侣》发布了定妆照，饰演小龙女的毛晓慧不仅自己凭借 “鼻影”上了热搜，还成功把...',
      imgUrl: '//upload-images.jianshu.io/upload_images/4635728-889381ccb773aa11?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
    {
      id: 4,
      title: '自媒体人电脑必备赚钱软件，每天操作两小时，月赚两三万闷声发财',
      desc: '做短视频人的越来越多，通过短视频发家致富奔小康的人也越来越多。 那么这些"聪明人"赚钱的秘密是什么呢？ 原因当然有很多，我就不赘述了。我们就拿其...',
      imgUrl: '//upload-images.jianshu.io/upload_images/14279122-9a0d7155031524fb.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    },
  ],
  recommendList:[
    {
      id: 1,
      imgUrl: `http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png`,
    },
    {
      id: 2,
      imgUrl: `http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png`,
    }
  ],
});

export default (state = defaultState, action) =>{
  switch (action.type) {
    default:
      return state;
  }
}