'use strict';


$(function(){
	$.ajax({
		type:"get",
		url:"src/data/good.json",
		async:true,
		success:function(data){
			evalData(data);
		}
	});
	
	function evalData(data){
		var data=eval(data).good;
		var html='';
		for(var i=0;i<data.length;i++){
			data[i].imgUrl=data[i].imgUrl.substring(3,data[i].imgUrl.length)
			html+='<li id="'+data[i].id+'"><div class="index_n_left"><img src="'+data[i].imgUrl+'" /></div><div class="index_n_right"><p class="index_nr_tit">';
			html+=data[i].tit+'</p><div class="index_nr_price"><em>'+data[i].price+'</em><span>';
			html+=data[i].oldPrice+'</span><i>'+data[i].count+'折'+'</i></div><a class="index_nr_cart"></a></div></li>';
		}
		$(".index_nav").html(html);
		var iSroll=new IScroll("#com_content",{
		    preventDefault: false
		});
		
		$('.index_n_left').on("tap",function(){
			location.href='html/detail.html?id='+$(this).parent().attr("id");
	
		});
		$('.index_nr_tit').on("tap",function(){
			location.href='html/detail.html?id='+$(this).parent().parent().attr("id");
	
		});
		
		
		
	}
	
	
	
	
	
	
});

























