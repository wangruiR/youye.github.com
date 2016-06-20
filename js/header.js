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
    
    /*购物车数量*/
     var delArr= function(ts){
	 	ts.sort(); //先排序
	 	var res = [ts[0]];
		 	for(var i = 1; i < ts.length; i++){
		  	if(ts[i] !== res[res.length - 1]){
		   	res.push(ts[i]);
		  	}
		}
		return res;
	}
    shopCartNumK();
    function shopCartNumK(){
        if($.cookie("shopcart")){
            var shopcart_num=delArr($.cookie("shopcart").split(",")).length;
            $(".shopcart_num").text(shopcart_num);
        }
    }
    
   
    
    
    
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
    
    
   
    
    
    
    
    
});