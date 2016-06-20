$(function(){
    $("#index_ad_nan:last").on("click",function(){
        $("body,html").stop().animate({"scrollTop":"0"});
    });
    
    $(window).on("scroll",function(){
        var $advert_top=$(this).height()/2+$(document).scrollTop()-160;
        $(".index_advert").stop().animate({"top":$advert_top},500);
    });
    
    
    
});