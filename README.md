##基于ionic的开发的App
###放弃了AngularJS ionic只做打包工具 可用cordova插件
### UI使用 [App Framework](http://app-framework-software.intel.com/index.php)
###由于App Framework 的icon 比较少 所以新增了 icon的库[Font Awesome](http://fontawesome.dashgame.com/)
####使用方法如下
```js
//需引入  //netdna.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css
  <span class="icons fa fa-weibo" ></span>
```
###使用[webpack](http://webpack.github.io/docs/tutorials/getting-started/)作为模块化开发的方案
####webpack的具体使用方法可见[react-webpack-cookbook](https://fakefish.github.io/react-webpack-cookbook/index.html)
####这个模块化的方案 会用到部分ES6语法特性 具体可参照 [ECMAScript 6入门](http://es6.ruanyifeng.com/#README)
#####模块书写实例如下:
```js
//login.js
var initModel,
    handleLogin,
    config;
config={
    form:'LoginForm'
};
handleLogin=function(){
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
initModel=function(){
    handleLogin();
};
//可暴露多个模块方法
module.exports={initModel,handleLogin};
```
```js
//app.js
//ES6 引用模块写法:
//import {initModel} from './js/page/login/login.js';
//commonJS 引用模块语法:
const Login =require('./js/page/login/login.js');
jQuery(document).ready(function(){
    "use strict";
    Login.initModel();
});

```

