'use strict';

/*denglu*/



$(function(){
    $(".login_btn_big").on("tap",function(){
        var $ts=$(".com_form input");
        if($ts.eq(0).val()==''){
            $ts.parent().parent().find("span").hide();
            $ts.eq(0).parent().find("span").text("请输入用户名");
            $ts.eq(0).parent().find("span").show();
        }else if($ts.eq(1).val()==''){
            $ts.parent().parent().find("span").hide();
            $ts.eq(1).parent().find("span").text("请输入用密码");
            $ts.eq(1).parent().find("span").show();
        }else{
            $ts.parent().parent().find("span").hide();
            $.ajax({
                url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                type:"POST",
                dataType:"json",
                data:{
                    status:"login",
                    userID:$ts.eq(0).val(),
                    password:$ts.eq(1).val()
                },
                success:function(res){
                    if(res==0){
                        $ts.eq(0).parent().find("span").text("用户名不存在");
                        $ts.eq(0).parent().find("span").show();
                    }else if(res==2){
                        $ts.eq(1).parent().find("span").text("密码或用户名错误！");
                        $ts.eq(1).parent().find("span").show();
                    }else{
                        if($("#remember").prop("checked")){
                            
                            var exp = new Date();  
                            exp.setTime(exp.getTime() + 3 * 24 * 60 * 60 * 1000);
                                
                    document.cookie="stuta=true;expires="+exp.toGMTString()+";path=/;";
                            localStorage.setItem("user",$ts.eq(0).val());
                            location.href="our.html";
                        
                        }else{
                            document.cookie="stuta=true;path=/";
                            localStorage.setItem("user",$ts.eq(0).val());
                            location.href="our.html";
                        }
                    }
                }
            });
        }
        
        
    });

});





















