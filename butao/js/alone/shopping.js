$(function(){
	var checkId=$.cookie("checkout").split(",");
    
	$("#shop_zhi a").not(":last").on("click",function(){
		$(this).addClass("action").siblings().removeClass("action");
	});
	var $citypicker = $('#adress');
	$citypicker.citypicker({
        province: '河南省',
        city: '许昌市',
        district: '禹州市'
    });
    var dan_price=0;
	$.ajax({
		type:"get",
		url:"../data/detail.json",
		async:true,
		success:function(res){
			var html='';
			data=res.data;
            for(var kk=0;kk<checkId.length;kk++){
                console.log(checkId[kk]);
                for(var i in data){
                    if(checkId[kk]==data[i].id){
                        html+='<li><a class="shop_gfbn_link"><img src="'+data[i].imgurl+'" /></a><span class="shop_bfbn_tit">';
                        html+=data[i].tit+'</span><span class="shop_bgbn_price">￥'+data[i].price+'</span>';
                        html+='<span class="shop_bfbn_shu">X'+$.cookie("check"+checkId[kk])+'</span></li>';
                        dan_price+=Number(data[i].price)*Number($.cookie("check"+checkId[kk]));

                    }
                }
            }
			
			$(".shop_bfb_nav").html(html);
			$("#shop_btn_info em").html("￥"+dan_price.toFixed(2));
			$(".shop_bb_money em").html("￥"+dan_price.toFixed(2));
		}
	});
	
	$(".shop_bfb_di").on("click",function(){
		$(".shop_bg").show();
		$(".shop_address").slideDown(600);
	});
	$(".shop_bg").on("click",function(){
		$(".shop_address").slideUp(600,function(){
			$(".shop_bg").fadeOut();
		});
	});
	$(".shop_ad_close").on("click",function(){
		
		$(".shop_address").slideUp(600,function(){
			$(".shop_bg").fadeOut();
		});
	});
	
	$(".shop_ad_btn").on("click",function(){
		//alert();
		if($(".shop_ad_box input[name=user]").val()==''||$(".shop_ad_box input[name=user]").val().length<2){
			alert("请填写收货人！");
		}else if($(".shop_ad_box input[name=address_xiang]").val()==''||$(".shop_ad_box input[name=address_xiang]").val().length<4){
			alert("请填写详细地址！");
		}else if($(".shop_ad_box input[name=phone]").val()==''||!/^\d{7,11}$/.test($(".shop_ad_box input[name=phone]").val())){
			alert("请填写手机号！");
		}else{
			//alert($(".shop_ad_box input[name=address]").val());
			$(".shop_bfb_dizhi").html($(".shop_ad_box input[name=address]").val());
			$(".shop_bb_hui").html("派送到<i>"+$(".shop_ad_box input[name=address]").val()+"</i>收货人：<i>"+$(".shop_ad_box input[name=user]").val()+"</i>");
			$(".shop_bf_box").find(".shop_bfb_di").text($(".shop_ad_box input[name=address]").val());
			$(".shop_address").slideUp(600,function(){
				$(".shop_bg").fadeOut();
			});
		}
	});
	
	
	
	
	
	
	
});
