
import {Base} from '../../utils/base.js'

class Product extends Base{
  constructor(){
    super();
  }

  getProductDetsInfo(id,callback){
    var that = this;
    var params = {
      url: '/api/v1/getProductDetsInfo/'+id,
      sCallback:function(data){
         data = data.data;
         callback && callback(data);
      }
    }
    this.Request(params);
  }

}

export {Product}