import {
  Config
} from 'config.js';
import {
  Token
} from 'token.js';

class Base {
  constructor() {
    this.baseRestUrl = Config.restUrl;
  }

  //http请求类
  Request(params, noRefetch) {
    var that = this;
    var url = this.baseRestUrl + params.url;
    //  console.log(this.baseRestUrl);
    //请求类型
    if (!params.type) {
      params.type = 'get';
    }
    wx.request({
      url: url,
      method: params.type,
      data: params.data,
      dataType: JSON,
      success: function(res) {
        if (res.data) {
          var jsonStr = res.data;
          var obj = JSON.parse(jsonStr);
          // console.log(obj);
          if (obj.head == '200') {
            params.sCallback && params.sCallback(obj);
          } else {
            params.eCallback && params.eCallback(obj);
          }
        }

      },
      fail: function() {

      }
    })
  }
  //获取绑定的值
  getDataSet(event , key){
    return event.currentTarget.dataset[key];
  };
}

export {
  Base
};