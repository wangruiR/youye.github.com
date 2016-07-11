'use strict';

$(function(){
    if(getCookie("stuta")==null||getCookie("stuta")=="false"){
        $(".unlogin_btn").css({"background":"url(../img/login_btn_big.png) no-repeat","background-size":" 100% 100%;"});
        $(".unlogin_btn").attr("href","login.html")
    }
    
    
    
    
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    }
  
});








