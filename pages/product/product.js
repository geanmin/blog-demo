import {Product} from 'product-model.js'

var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[],
    productDets:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._onLoadData();
  },

  /**
   * 商品详情页
   */
  _onLoadData:function(callback){
      product.getProductDetsInfo((data)=>{
        console.log(data);
          this.setData({
            productDets:data,
            background:data.imgArr,
          })
      });
  }
})