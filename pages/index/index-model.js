import {Base} from '../../utils/base.js'

class Home extends Base{
  constructor(){
    super();
  }

  //接收轮播图
  getBannerData(callback){
    var that = this;
    var params = {
      url: '/api/v1/indexBanner',
      sCallback: function (data) {
        // console.log(data);
        data = data.data;
        callback && callback(data);
      }
    }
    this.Request(params);
  }

  //产品分类
  getProductCatColumnData(callback){
    var that = this;
    var params = {
      url: '/api/v1/getProductCateGoryColumn',
      sCallback: function (data) {
        // console.log(data);
        data = data.data;
        callback && callback(data);
      }
    }
    this.Request(params);
  }

  //今日特价
  getDailyReals(callback){
    var that = this;
    var params = {
      url: '/api/v1/getDailyReal',
      sCallback: function (data) {
        
        data = data.data;
        callback && callback(data);
      }
    }
    this.Request(params);
  }

  //商品详情分类
  getCateGoryProduct(callback){
    var that =this;
    var params = {
      url: '/api/v1/getCateGoryProduct',
      sCallback:function(data){
        data = data.data;
        callback && callback(data);
      }
    }
    this.Request(params);
  }
}

export {Home}