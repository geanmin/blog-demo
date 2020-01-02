
import {Base} from '../../utils/base.js'

class Product extends Base{
  constructor(){
    super();
  }

  getProductDetsInfo(callback){
    var that = this;
    var params = {
      url: '/api/v1/getProductDetsInfo/'+3,
      sCallback:function(data){
         data = data.data;
         callback && callback(data);
      }
    }
    this.Request(params);
  }

}

export {Product}