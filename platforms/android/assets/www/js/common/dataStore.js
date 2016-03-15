/**
 * Created by frank on 2015/12/27.
 */
var dataStore = (function () {
  var handleLocalSorage;
  handleLocalSorage={
    set:function(key,value){
      store.set(key,value);
    },
    get:function(key){
      var result;
      result=store.get(key);
      return result;
    }
  };
  return{
    localStorageSet:handleLocalSorage.set,
    localStorageGet:handleLocalSorage.get
  }
})();
