$(function(){
    $("#main_dclt_nav").find("li").on("click",function(){
        var $index=$(this).index()/2;
        $(this).addClass("action").siblings().removeClass("action");
        $(".main_dcl_box").hide();
        $(".main_dcl_box").eq($index).show();
    });
});