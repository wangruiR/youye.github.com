'use strict';

$(function(){
    $('.unlogin_btn').on("tap",function(){
        document.cookie="stuta=false;path=/";
        location.reload();
    });
    
    /*function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return null;
    }*/
    
});







