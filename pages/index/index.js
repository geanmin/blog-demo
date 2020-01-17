//index.js
//获取应用实例
// const app = getApp()
import {
  Home
} from 'index-model.js'

var home = new Home();

Page({
  data: {
    loadingHidden: false,
    background: [], //轮播图
    ProductCateGory: [], //分类
    dailyReal: [], //今日特价
    Details: [], //商品详情
  },
  onLoad: function() {
    //初始化
    this._loadData();
  },

  //加载数据
  _loadData: function(callback) {
    var that = this;
    //获取轮播图
    home.getBannerData((data) => {

      that.setData({
        background: data,
        loadingHidden: true
      });
    });

    //获取分类
    home.getProductCatColumnData((data) => {
      that.setData({
        ProductCateGory: data,
      });
    });

    //今日特价
    home.getDailyReals((data) => {
      that.setData({
        dailyReal: data,
      });
    });

    //商品详情
    home.getCateGoryProduct((data) => {
      // console.log(data);
      that.setData({
        Details: data,
      });
    });
  },
  //跳转今日特价
  onThemesItemTap: function(event) {
    var id = event.currentTarget.id;
    wx.navigateTo({
      url: '../product/product.js?id = ' + id,
    })
  },
  //跳转到商品页面
  detailInfo: function(event) {
    var id = event.currentTarget.id;

    wx.navigateTo({
      url: '../product/product?id= ' + id,
    })

  }
})