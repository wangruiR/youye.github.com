/*
 *这是一个获取页面数据的jquery插件
 * */
;(function($){
	$.fn.extend({
		dataLoad:function(options){
			var obj=$(this);
			//obj.find("com_nav_list");
			options=options||{};
			$.ajax({
				type:"get",
				url:options.url,
				async:true,
				success:function(res){
                    //console.log(res);
					var html='';
					for(var i in res.data){
						//console.log(res.data[i].imgurl);
						html+='<li id="'+res.data[i].id+'"><div class="com_nl_img"><img src="'+res.data[i].imgurl+'" /></div>';
						html+='<h3 class="com_nl_tit"><a>'+res.data[i].tit+'</a></h3>';
						html+='<div class="com_nl_contain"><span class="com_nl_price">￥'+res.data[i].price+'</span><div class="com_nl_smlcon"><span class="com_nl_oldprice"><i>';
						html+=res.data[i].old_price+'</i><em>('+res.data[i].disc+')</em></span><span class="com_nl_stutas">';
						html+=res.data[i].state+'</span></div><a class="com_nl_btn">立即购买</a></div></li>';
					}
					obj.find(".com_nav_list").html(html);
					obj.find(".com_nav_list li").on("click",function(){
						location.href="html/detailed.html?id="+$(this).attr("id");
					});
				}
			});
			
		},
        dataTopLoad:function(options){
            var obj=$(this);
			//obj.find("com_nav_list");
			options=options||{};
			$.ajax({
				type:"get",
				url:options.url,
				async:true,
				success:function(res){
                    //console.log(res);
					var html='';
                    html+='<a class="index_cs_imgshow"><img src="'+res.data[0].imgurl+'" /></a><ul class="index_cs_nav">';
					for(var i=1;i<=2;i++){
						//console.log(res.data[i].imgurl);
						html+='<li><h4 class="index_cs_tit">'+res.data[i].tit+'</h4><span class="index_cs_msg">';
                        html+=res.data[i].msg+'</span><a class="index_cs_subshow"><img src="'+res.data[i].imgurl+'"/></a></li>';
					}
                    html+='</ul>';
					obj.html(html);
				}
			});
			
        }
	});
	
	
	
	
	
	
})(jQuery);
