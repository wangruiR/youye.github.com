$(function(){
    $("#index_ad_nav:last").on("click",function(){
        $("body,html").stop().animate({"scrollTop":"0"});
    });
});