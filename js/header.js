$(function(){
    $("#header_left_kuaijie").on("mouseover",function(){
 $(this).find(".header_left_subnav").stop().fadeIn();
    });
    $("#header_left_kuaijie").on("mouseout",function(){
 $(this).find(".header_left_subnav").stop().fadeOut();
    });
});