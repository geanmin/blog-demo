import {
  Product
} from 'product-model.js'

var product = new Product();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false,
    background: [],
    productDets: [],
    num: 1, //商品数量
    cartTotalCounts: 0, //购物车数量
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
        background: data.imgArr,

      })
    });
  },

  /**商品数量减少 */
  productreduce: function(event) {
    console.log(event);
  },

  /**加入购物车 */
  onAddingToCartTap: function(events) {
    // console.log(event);
    this._flyToCartEffect(events);
  },
  /**添加购物车动效 */
  _flyToCartEffect: function(events) {
    var touches = events.touches[0];
    // console.log(events);
    var diff = {
        X: 145 + touches.clientX + 'px',
        Y: '571px',
      },
      style = 'display: block;-webkit-transform:translate(' + diff.x + ',' + diff.y + ') rotate(350deg) scale(0)'; //移动距离
    this.setData({
      isFly: true,
      translateStyle: style
    });
    var that = this;
    setTimeout(() => {
      that.setData({
        isFly: false,
        translateStyle: '-webkit-transform: none;', //恢复到最初状态
        isShake: true,
      });
      setTimeout(() => {
        var counts = that.data.cartTotalCounts + that.data.productCounts;
        that.setData({
          isShake: false,
          cartTotalCounts: counts
        });
      }, 200);
    }, 1000);
  },
  onclick: function(events) {
    console.log(events);
  }
})