$(function(){
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
	shopart_show();
	var shopcart_arr=delArr($.cookie("shopcart").split(","));
	function shopart_show(){
		if($.cookie("shopcart")){
			$(".cart_no").hide();
			$(".cart_main").show();
			$.ajax({
				type:"get",
				url:"../data/detail.json",
				async:true,
				success:function(res){
					/*解析到页面*/
					var html='';
					for(var j=0;j<shopcart_arr.length;j++){
						for(var i in res.data){
							if(res.data[i].id==shopcart_arr[j]){
								html+='<tr name="'+shopcart_arr[j]+'"><td width="60"><input type="checkbox" /></td><td width="100" class="cart_good_img"><a><img src="';
								html+=res.data[i].imgurl+'" /></a></td><td width="420" class="cart_good_tit">'+res.data[i].tit+'</td><td class="cart_goodNum"><a class="date_bb_btn reduce">-</a><span class="date_bb_num">';
								html+=$.cookie("num"+shopcart_arr[j])+'</span><a class="date_bb_btn add">+</a>件</td><td class="cart_danjia">'+res.data[i].price+'</td><td class="cart_xiaoji">';
								html+=(Number(res.data[i].price)*Number($.cookie("num"+shopcart_arr[j]))).toFixed(2)+'</td><td><div class="cart_del">删除</div></td></tr>';
							}
						}
					}
					
					$(".cart_sh_tab").prepend(html);
					
					/*anniu功能绑定*/
					$(".cart_goodNum").find(".reduce").on("click",function(){
				
				    	if(Number($(this).parent().find(".date_bb_num").text())<=1){
				    		$(this).parent().find(".date_bb_num").html(1);

				    		$(this).parent().find(".date_bb_num").html();
				    	}else{
				    		$(this).parent().find(".date_bb_num").html(Number($(this).parent().find(".date_bb_num").text())-1);
				    	}
				    	var cart_xiaoji=Number($(this).parent().parent().find(".cart_danjia").text())*Number($(this).parent().find(".date_bb_num").text());
				    	$(this).parent().parent().find(".cart_xiaoji").html(cart_xiaoji.toFixed(2));
					});
				    $(".cart_goodNum").find(".add").on("click",function(){
				    	$(this).parent().find(".date_bb_num").html(Number($(this).parent().find(".date_bb_num").text())+1);
				    	var cart_xiaoji=Number($(this).parent().parent().find(".cart_danjia").text())*Number($(this).parent().find(".date_bb_num").text());
				    	$(this).parent().parent().find(".cart_xiaoji").html(cart_xiaoji.toFixed(2));
				    });
					$(".cart_del").on("click",function(){
						var del_name=$(this).parent().parent().attr("name");
						for(var i=0;i<shopcart_arr.length;i++){
							if(del_name==shopcart_arr[i]){
								shopcart_arr.splice(i,1);
							}
						}
						$.cookie("num"+del_name,null,{path:'/'});
						$.cookie("shopcart",shopcart_arr.toString(),{path:"/"});
						shopart_show();
					});
					
				
					
					
					$(".cart_sh_tab input").not(".cart_all_check").on("change",function(){
						
	
						check_num();
					});
					$(".cart_sh_tab input").not(".cart_all_check").on("click",function(){
						
						$(".cart_all_check").prop("checked",false);
						check_num();
					});
					
					$(".cart_all_check").on("click",function(){
						if($(this).get(0).checked){
							$(".cart_main input").prop("checked",true);
							$(".cart_sh_tab input").not(".cart_all_check").trigger("change");
						}else{
							$(".cart_main input").prop("checked",false);
							$(".cart_sh_tab input").not(".cart_all_check").trigger("change");
						}
					});
					
				}
			});
			
			
		}else{
			$(".cart_no").show();
			$(".cart_main").hide();
		}
	};
	
	
	function check_num(){
		var cart_Zong=0;
		var cart_checkGe=0;
		for(var i=0;i<$(".cart_sh_tab input").length;i++){
			if($(".cart_sh_tab input").eq(i).get(0).checked){
				cart_Zong+=Number($(".cart_sh_tab input").eq(i).parent().parent().find(".cart_xiaoji").text());
				cart_checkGe++;
			}
		}
		$("#cart_checkGe").html(cart_checkGe);
		$("#cart_Zong").html(cart_Zong.toFixed(2));
	}
	
	
	
	
	
	
	
});
