'use strict';

$(function(){
    if(getCookie("stuta")=="true"){
        $("#list_id").text(localStorage.getItem("user"));
        $("#list_id").parent().parent().find("a").hide();
        $(".list_u_img").attr("href","javascript:void(0)");
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















