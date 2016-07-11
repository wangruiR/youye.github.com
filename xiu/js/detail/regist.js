'use strict';

$(function(){
    $(".regist_btn_big").on("tap",function(){
        var $ts=$(".com_form input");
        if(!/^[a-zA-z][a-zA-Z0-9_]{2,15}$/.test($ts.eq(0).val())){
            $ts.parent().parent().find("span").hide();
            $ts.eq(0).parent().find("span").text("请输入 3-16位的字母下划线和数字");
            $ts.eq(0).parent().find("span").show();
        }else if(!/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test($ts.eq(1).val())){
            $ts.parent().parent().find("span").hide();
            $ts.eq(1).parent().find("span").text("请输入 6-12位的字母、数字和特殊字符");
            $ts.eq(1).parent().find("span").show();
        }else if($ts.eq(2).val()!=$ts.eq(1).val()){
            $ts.parent().parent().find("span").hide();
            $ts.eq(2).parent().find("span").text("两次输入密码不一致");
            $ts.eq(2).parent().find("span").show();
        }else{
            $ts.parent().parent().find("span").hide();
            $.ajax({
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                type:"POST",
                dataType:"json",
                data:{
                    status:"register",
                    userID:$ts.eq(0).val(),
                    password:$ts.eq(1).val()
                },
                success:function(res){
                    if(res==0){
                        $ts.eq(0).parent().find("span").text("用户名已经存在");
            $ts.eq(0).parent().find("span").show();
                    }else if(res==1){
                        document.cookie="stuta=true;path=/";
                        localStorage.setItem("user",$ts.eq(0).val());
                        location.href="our.html";
                    }
                }
            });
        }
    });
    
});














