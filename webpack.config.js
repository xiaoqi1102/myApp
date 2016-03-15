/**
 * Created by yzsoft on 16/3/15.
 */
var path=require('path');
module.exports={
  entry:path.resolve(__dirname,'www/app.js'),
  output:{
     path:path.resolve(__dirname,'www/build'),
     filename:'bundle.js'
  }
};