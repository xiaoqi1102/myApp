/**
 * Created by yzsoft on 16/3/14.
 */
//系统配置的模块
var sysConfig=(function($){
  var initModel,
      handleApiHost;
  handleApiHost={
    apiHost:'http://192.168.1.109:1401/',
    set:function(value){
      dataStore.localStorageSet(global.apiHost,value);
    },
    get:function(key){
      var result;
      result=handleApiHost.apiHost;
      return result;
    }
  };
  initModel=function(){

  };
  return{
    initModel:initModel,
    setApiHost:handleApiHost.set,
    getApiHost:handleApiHost.get
  }
})(jQuery);
