$(function(){
    $("#header_left_kuaijie").mouseover(function(){
 $(this).find(".header_subnan").stop().fadeIn();
    });
    $("#header_left_kuaijie").on("mouseout",function(){
 $(this).find(".header_subnan").stop().fadeOut();
    });
    $(".header_right_sele").mouseover(function(){
 $(this).find(".header_right_subnan").stop().fadeIn();
    });
    $(".header_right_sele").on("mouseout",function(){
 $(this).find(".header_right_subnan").stop().fadeOut();
    });
    header_pan();
    
    /*购买的退出的按钮*/
    $(document).on("click",function(evt){
    	if(evt.target.name=="header_tui"){
    		$.cookie("user",null,{path:"/"});
    		header_pan();
    	}
    });
    
    
    function header_pan(){
    	if($.cookie("user")){
	    	$("#header_left dd:first").siblings().hide();
	    	$("#header_left em:first").show();
	    	$("#header_left dd:last").html("<span class='header_user'>"+$.cookie("user")+"</span>欢迎来到步淘生活商城！<a class='header_tui' name='header_tui'>退出</a>");
	    	$("#header_left dd:last").show();
	    }else{
	    	$("#header_left dd:first").siblings().show();
            $("#header_left dd:last").hide();
	    	$("#header_left dd:last").html('');
	    }
    }
    
    
    /*导航*/
    $(".menu_list li").on({
        mouseover:function(){
            $(this).stop().animate({"padding-left":"14"});
            $(".menu_showbox").eq($(this).index()).show().stop().animate({"left":"180"},300);
        },
        mouseout:function(){
            $(this).stop().animate({"padding-left":"0"});
            $(".menu_showbox").eq($(this).index()).stop().animate({"left":"150"}).hide();
        }
    });
    $(".menu_showbox").on({
        mouseover:function(){
            console.log($(this).index())
            $(this).show();
            $(this).stop().css({"left":"180px"});
            $(".menu_list li").eq($(this).index()-2).stop().css({"padding-left":"14px"});
        },
        mouseout:function(){
            $(".menu_list li").eq($(this).index()-2).animate({"padding-left":"0"});
            $(this).stop().animate({"left":"150"}).hide();
        }
    });
    
    
    
    
    
    
});