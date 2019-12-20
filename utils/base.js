import {Config} from 'config.js';
import {Token}  from 'token.js'; 

class Base{
   constructor(){
     this.baseRestUrl = Config.baseRestUrl;
   }

   //http请求类
   Request(params , noRefetch){
      var that = this;
          url = this.baseRestUrl + params.url;
      //请求类型
      if(!params.type){
         params.type = 'get';
      }
      wx.request({
        url: url,
        method: params.type,
        data: params.data,
        dataType: JSON,
        success:function(res){
            if(res.head == 200){
              params.sCallback&&params.sCallback(res.data);
            }else{
              params.eCallback&&params.eCallback(res.data);
            }  
        },
        fail:function(){

        }
      })    
   }
}

export {Base};