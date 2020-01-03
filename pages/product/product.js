import {
  Product
} from 'product-model.js'

var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:false,
    background: [],
    productDets: [],
    num:1,//商品数量
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._onLoadData();
    //先从内存中获取商品数量
  },

  /**
   * 商品详情页
   */
  _onLoadData: function(callback) {
    product.getProductDetsInfo((data) => {
      this.setData({
        loadingHidden: true,
        productDets: data,
        background:data.imgArr,
        
      })
    });
  },

  /**商品数量减少 */
  productreduce: function(event){
    console.log(event);
  }
})