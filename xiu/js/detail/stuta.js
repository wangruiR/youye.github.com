'use strict';


'use strict';

$(function(){
    if(getCookie("stuta")==null||getCookie("stuta")=="false"){
        alert("您还没有登录，请登录！");
        location.href='login.html';
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










