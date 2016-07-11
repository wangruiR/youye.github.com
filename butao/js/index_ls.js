$(function(){
    $("#index_ls_nan li").not(".index_ls_last").on("mouseover",function(){
        $(this).find("i").stop().fadeOut(300);
        $(this).find("span").stop().fadeIn(300);
    });
    $("#index_ls_nan li").not(".index_ls_last").on("mouseout",function(){
        $(this).find("span").stop().fadeOut(300);
        $(this).find("i").stop().fadeIn(300);
    });
    $("#index_ls_nan li").not(".index_ls_last,.index_ls_first").on("click",function(){
    	var $index=$(this).index()-1;
    	$("body,html").animate({"scrollTop":$(".index_com_box").eq($index).position().top});
    	//alert($(".index_com_box").eq($index).position().top)
    });
    $("#index_ls_nan li:last").on("click",function(){
    	$("body,html").animate({"scrollTop":"0"});
    });
});