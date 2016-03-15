/**
 * Created by yzsoft on 16/3/15.
 */
var path=rquire('path');
module.exports={
  entry:path.resolve(__dirname,'www/app.js'),
  output:{
     path:path.resolve(__dirname,'build'),
     filename:'bundle.js'
  }
};