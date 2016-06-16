$(function(){
	$("#login_form").on("submit",function(){
		$("input").not(".lo_check").on("focus",function(){
			$(this).parent().find("span").hide();
		});
		if($("input[name=user]").val()==''){
			//alert("请输入用户名");
			$("input[name=user]").parent().find("span").text("请输入用户名！");
			$("input[name=user]").parent().find("span").show();
			return false;
		}else if($("input[name=pwd]").val()==''){
			$("input[name=pwd]").parent().find("span").text("请输入密码！");
			$("input[name=pwd]").parent().find("span").show();
			//alert("请输入密码");
			return false;
		}
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			data:{
				status:"login",
				userID:$("input[name=user]").val(),
				password:$("input[name=pwd]").val()
			},
			success:function(res){
				//alert($("input[name=lo_check]").is(':checked'))
				if(res==0){
					$("input[name=user]").parent().find("span").text("用户名不存在！");
					$("input[name=user]").parent().find("span").show();
				}else if(res==2){
					$("input[name=pwd]").parent().find("span").text("密码错误！");
					$("input[name=pwd]").parent().find("span").show();
				}else{
					if($("input[name=lo_check]").is(':checked')){
						$.cookie("user",$("input[name=user]").val(),{expires:7,path:"/"});
					}else{
						$.cookie("user",$("input[name=user]").val(),{path:"/"});
					}
					location.href="../index.html";
				}
			}
		});
		return false;
	});
});
