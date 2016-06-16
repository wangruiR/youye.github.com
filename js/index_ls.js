$(function(){
    $("#index_ls_nav li").not(".index_ls_last").on("mouseover",function(){
        $(this).find("i").stop().fadeOut(300);
        $(this).find("span").stop().fadeIn(300);
    });
    $("#index_ls_nav li").not(".index_ls_last").on("mouseout",function(){
        $(this).find("span").stop().fadeOut(300);
        $(this).find("i").stop().fadeIn(300);
    });
});