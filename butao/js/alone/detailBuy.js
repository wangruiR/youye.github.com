$(function(){
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
    function shopCartNumK(){
        if($.cookie("shopcart")){
            var shopcart_num=delArr($.cookie("shopcart").split(",")).length;
            $(".shopcart_num").text(shopcart_num);
        }
    }
	var cartArr={
    	id:"",
    	color:"",
    	size:"",
    	num:''
    };
    var IDurl=window.location.href;
    var GoodId=IDurl.substr(IDurl.indexOf("=")+1);
    
    
    $(".main_db_buy").on("click",function(){
        $.cookie("checkout",GoodId,{path:'/'});
        location.href="shoping.html";
        $.cookie("check"+GoodId,"1",{path:'/'});
    });
    
    
    
    
    
    
    
    
    
	$("#cart_add").on("click",function(){
		var shopcartnum=Number($(".date_bb_num").text());
		
		if($.cookie("shopcart")){
			$.cookie("shopcart",$.cookie("shopcart")+','+GoodId,{path:'/'});
			$.cookie("num"+GoodId,Number($.cookie("num"+GoodId))+shopcartnum,{path:"/"});
		}else{
			$.cookie("shopcart",GoodId,{path:'/'});
			$.cookie("num"+GoodId,Number($.cookie("num"+GoodId))+shopcartnum,{path:"/"});
		}
		if($.cookie("shopcart")){
	    	shopCartNumK();
	    	$(".deta_buy_bg").hide();
    		$(".date_b_box").slideUp(400);
	    }
	});
});
