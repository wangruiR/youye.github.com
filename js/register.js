$(function(){
	var $re_pan_arr=[0,0,0,0];
	$("input").on("blur",function(){
		var $index=$(this).attr("name");
		if($index=="email"){
			if($(this).val()==''){
				$re_pan_arr[0]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("请输入邮箱！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else if(!/^\w+@[a-zA-Z0-9]{2,3}\.[a-zA-Z]+$/.test($(this).val())){
				$re_pan_arr[0]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("请输入正确邮箱！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else{
				$re_pan_arr[0]=1;
				$(this).parent().find("em").show();
				$(this).parent().find("span").hide();
				$(this).parent().find("em").css({"background-position":"0 -187px"});
			}
		}else if($index=="user"){
			if($(this).val()==''){
				$re_pan_arr[1]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("用户名为4-16个字符以上！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else if(!/^\w{4,16}$/.test($(this).val())){
				$re_pan_arr[1]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("用户名为4-16个字符以上！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else{
				$re_pan_arr[1]=1;
				$(this).parent().find("em").show();
				$(this).parent().find("span").hide();
				$(this).parent().find("em").css({"background-position":"0 -187px"});
			}
		}else if($index=="pwd"){
			if($(this).val()==''){
				$re_pan_arr[2]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("为啦账户安全起见，建议最少为6个字符以上!");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else{
				$re_pan_arr[2]=1;
				$(this).parent().find("em").show();
				$(this).parent().find("span").hide();
				$(this).parent().find("em").css({"background-position":"0 -187px"});
				
			}
		}else if($index=="qr_pwd"){
			if($(this).val()==''){
				$re_pan_arr[3]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("请再次输入密码！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else if($(this).val()!=$("input[name=pwd]").val()){
				$re_pan_arr[3]=0;
				$(this).parent().find("em").show();
				$(this).parent().find("span").show();
				$(this).parent().find("span").text("两次输入密码不一致！");
				$(this).parent().find("em").css({"background-position":"0 -228px"});
			}else{
				$re_pan_arr[3]=1;
				$(this).parent().find("em").show();
				$(this).parent().find("span").hide();
				$(this).parent().find("em").css({"background-position":"0 -187px"});
			}
		}
	});
	
	$("#register").on("submit",function(){
		for(var i in $re_pan_arr){
			if(!$re_pan_arr[i]){
				return false;	
			}
		}
		$.ajax({
			type:"post",
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			async:true,
			data:{
				status:"register",
				userID:$("input[name=user]").val(),
				password:$("input[name=pwd]").val()
			},
			success:function(res){
				if(res==0){
					$re_pan_arr[1]=0
					$("input[name=user]").parent().find("em").show();
					$("input[name=user]").parent().find("em").css({"background-position":"0 -228px"});
					$("input[name=user]").parent().find("span").show();
					$("input[name=user]").parent().find("span").text("用户名已经存在！");
				}else if(res==1){
					alert("注册成功");
					location.href="login.html";
				}
			}
		});
		return false;
	});
});
