$(function(){
     /*导航*/
    $(".menu_list li").on({
        mouseover:function(){
            $(this).stop().animate({"padding-left":"14"});
            $("#menu_show").find("div").eq($(this).index()).show().stop().animate({"left":"180"},300);
        },
        mouseout:function(){
            $(this).stop().animate({"padding-left":"0"});
            $("#menu_show").find("div").eq($(this).index()).stop().animate({"left":"150"}).hide();
        }
    });
    $("#menu_show").find("div").on({
        mouseover:function(){
            //console.log($(this).index())
            $(this).show();
            $(this).stop().css({"left":"180px"});
            $(".menu_list li").eq($(this).index()).stop().css({"padding-left":"14px"});
        },
        mouseout:function(){
            $(".menu_list li").eq($(this).index()).animate({"padding-left":"0"});
            $(this).stop().animate({"left":"150"}).hide();
        }
    });
    $.ajax({
        type:"get",
        url:"../data/menu.json",
        dataType:"json",
        success:function(res){
            //console.log(res);
            var data=res.data;
            for(var i in data){
                //console.log(data[i]);
               /* <p>
                           <strong>母婴</strong>
                            <a href="">母婴用品</a>
                            <a>母婴用品</a>
                            <a>母婴</a>
                            <a>母婴用品</a>
                            <a>母婴用品</a>
                            <a>母婴用</a>
                            <a>母婴用品</a>
                            <a>母婴</a>
                        </p>*/
                for(var j in data[i]){
                    var data_sub=data[i][j];
                    var html='';
                    for(var t in data_sub){
                        html+='<p>';
                        html+='<strong>'+data_sub[t].tit+'</strong>';
                        for(var k in data_sub[t].link){
                            if(!(i*k*j*t%8==0)){
                                html+='<a href="" class="red">'+data_sub[t].link[k]+'</a>';
                            }else{
                                html+='<a href="">'+data_sub[t].link[k]+'</a>';  
                            }
                            
                        }
                        html+='</p>';
                        //console.log(html);
                    }
                    $("#menu_show").find("div").eq(i).html(html);
                }
            }
        }
    });
})