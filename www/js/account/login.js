/**
 * Created by yzsoft on 16/3/10.
 */
var Login=(function($){
  var initModel,
      login,
      config;
  config={
    form:'LoginForm'
  };
  initModel=function(){
    //alert('login init');
    console.log('login init');
    login();
  };
  login=function(){
    var form;
    form=$('#'+config.form);
    form.bind('submit',function(e){
      $.afui.showMask('正在登陆');
      //alert('form submit');
      e.preventDefault();
      var obj={
        loginName:form.find('#loginName').val(),
        pwd:form.find('#password').val()
      };
      console.log(obj);
      var url=sysConfig.getApiHost()+'account/login';
     // alert(url);
      //$.afui.loadContent('#main',false,false,'up');
      $.ajax({
        url:url,
        type:'post',
        data:JSON.stringify(obj),
        contentType:'text/plain',
        success:function(res){
          //alert('login success');
          $.afui.hideMask();
          $.afui.loadContent('#main',false,false,'up');
        },
        error:function(res){
          alert('login error :'+JSON.stringify(res));
        }
      });
    });
  };
  return{
    initModel:initModel
  }
})(jQuery);
