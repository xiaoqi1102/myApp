/**
 * Created by yzsoft on 16/3/14.
 */
var Main=(function($){
  var initModel;
  initModel=function(){

    Login.initModel();
  };
  return{
    initModel:initModel
  }
})(jQuery);
jQuery(document).ready(function(){
  Main.initModel();
});
