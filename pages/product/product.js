import {
  Product
} from 'product-model.js'
import {
  Common
} from '../../utils/common.js'

var product = new Product();
var common = new Common();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden: false,
    background: [],
    productDets: [],
    num: 1, //商品数量
    cartTotalCounts: 0, //购买总数量
    productCounts: 1, //购物车数量
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

  /**获取添加数量 */
  getInputValue(e) {
    var num = e.detail.value;
    var num = common.inputVailNum(num);
    //改变焦点时，覆盖掉商品数量
    var that = this;
    if ((num - that.data.cartTotalCounts) < 0) {
      return;
    }
    that.setData({
      productCounts: num,
    })
  },
  /**商品数量减少 */
  productreduce: function(event) {
    //同时传递是加减
    this._flyToCartEffect(event, 0);
  },

  /**商品数量添加 */
  productadd: function(event) {
    //同时传递是加减
    this._flyToCartEffect(event, 1);
  },


  /**加入购物车 */
  onAddingToCartTap: function(event) {
    //同时传递是加减
    this._flyToCartEffect(event, 1);
    //同时将购物车数据加入到内存去
    this.addToCart();
  },

  /**购物车加入内存中 */
  addToCart: function() {
    var tmpObj = {};
    var keys = ['id', 'name', 'price', 'img'];

      //遍历放到对象中
      for (var key in this.data.productDets) {
        if (keys.indexOf(key) >= 0) {
          tmpObj[key] = this.data.product[key];
        }
      }
    //加入到购物车
    card.add(tmpObj, this.data.productDets);
  },

  /**添加购物车动效 */
  _flyToCartEffect: function(events, type) {
    var touches = events.touches[0];
    var diff = {
        X: 240 + touches.clientX + 'px',
        Y: 300 + touches.clientY + 'px',
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
        if (type == 0) {
          var counts = that.data.cartTotalCounts - that.data.productCounts;
        } else {
          var counts = that.data.cartTotalCounts + that.data.productCounts;
        }

        that.setData({
          isShake: false,
          cartTotalCounts: counts,
        });
      }, 200);
    }, 1000);
  },
  onclick: function(events) {

  }
})