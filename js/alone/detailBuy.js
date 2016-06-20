$(function(){
	var cartArr={
    	id:"",
    	color:"",
    	size:"",
    	num:''
    };
    var IDurl=window.location.href;
    var GoodId=IDurl.substr(IDurl.indexOf("=")+1);
	$("#cart_add").on("click",function(){
		var shopcartnum=Number($(".date_bb_num").text());
		
		if($.cookie("shopcart")){
			$.cookie("shopcart",$.cookie("shopcart")+','+GoodId,{path:'/'});
			$.cookie("num"+GoodId,Number($.cookie("num"+GoodId))+shopcartnum,{path:"/"});
		}else{
			$.cookie("shopcart",GoodId,{path:'/'});
			$.cookie("num"+GoodId,Number($.cookie("num"+GoodId))+shopcartnum,{path:"/"});
		}
		location.href="shopCart.html";
	});
});
