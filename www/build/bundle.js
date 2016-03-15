/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yzsoft on 16/3/15.
	 */
	//import {initModel} from './js/page/login/login.js';
	const Login =__webpack_require__(1);
	jQuery(document).ready(function(){
	    "use strict";
	    Login.initModel();
	});



/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by yzsoft on 16/3/15.
	 */
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
	module.exports={initModel,handleLogin};

/***/ }
/******/ ]);