import {Config} from 'config.js'
import {Base}   from 'base.js'

class Token{
   constructor(){
     this.verify = Config.restUrl + 'api/v1/index/userLogin';
   }

   login(){
     wx.login({
       success: res => {
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
         if (res.code) {
           var that = this;
            wx.request({
              url: this.verify,
              method: 'post',
              dataType: 'json',
              data:{"code": res.code},
              success:function(){

              },
              fail:function(){
                console.log("服务器错误");
              }
            })
            console.log(res.code);
         }
         
       }
     })
   }
}

export {Token};