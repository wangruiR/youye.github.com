'use strict';

$(function(){
	var url=window.location.href;
	var indexof=url.indexOf("=");
	
	url=url.substring(indexof+1,url.length);
	
	$.ajax({
		type:"get",
		url:"../src/data/good.json",
		async:false,
		success:function(data){
			var data=eval(data).good;
			for(var i=0;i<data.length;i++){
				if(data[i].id==url){
					evalData(data[i])
				}
			}	
		}
	});
	
	function evalData(data){
		$(".good_d_show").find("img").attr("src",data.imgUrl);
		$(".good_d_price").find("em").text("￥"+data.price);
		$(".good_d_price").find("span").text(data.tit.substring(0,8));
		$(".good_d_msg").find("em").text("￥"+data.oldPrice);
		$(".good_d_msg").find("span").eq(1).text(data.count+"折");
		$(".good_d_msg").find("strong").text(data.buy+"人购买");
		$(".good_di_box").html('<img src="'+data.msg+'" />');
		var html='';
		for(var i=0;i<data.show.length;i++){
			html+='<li><img src="'+data.show[i]+'" /></li>';
		}
		
		$(".good_d_nav").html(html);
		

	}
	
	
});


 $(function () {
     var flag = 0;
     $(".good_d_nav").on("swipeRight", function (e) {
         if (flag > 0) {
             flag--;
             change(flag, true);
             
         }
     });
     $(".good_d_nav").on("swipeLeft", function (e) {
         if (flag < 3) {
             flag++;
             change(flag, true);
         }
     });

     function change(flag, fn) {
         var offset = flag * 25;
         $(".good_d_nav").css("transform", 'translateX(-' + offset + '%)');
         $(".good_d_subnav li").removeClass("action");
         $(".good_d_subnav li").eq(flag).addClass("action");
	}
 });

$(function(){
	var iSroll=new IScroll(".good_d_intro");

	var flag=0;
	$(".com_cont").hide();
	
	changeShow(flag);
	
	function changeShow(flag){
		$(".com_cont").hide();
		$(".com_cont").eq(flag).show();
		if(flag==1){
			iSroll.refresh();
		}
	}
	
	$(".detail_footer div").on("tap",function(){
		$(".detail_footer div").removeClass("action");
		$(this).addClass("action");
		flag=$(this).index();
		changeShow(flag);
	});
	
});




















