$(function(){

    var $lunbo_index=0;
    lunShow();

    var $timer=setInterval(function(){
        $lunbo_index++;
        if($lunbo_index>=$(".banner_nav li").length){
           $lunbo_index=0    
        }
        
        lunShow();
    },4000);
    
    $(".banner").on({
        mouseenter:function(){
            clearInterval($timer);
        },
        mouseleave:function(){
           $timer=setInterval(function(){
                $lunbo_index++;
                if($lunbo_index>=$(".banner_nav li").length){
                   $lunbo_index=0    
                }

                lunShow();
            },4000);
        }
    });
    
    /*轮播图函数*/
    function lunShow(){
        $(".banner_btn li").removeClass("action");
        $(".banner_btn li").eq($lunbo_index).addClass("action");
        $(".banner_nav li").stop().fadeOut();
        $(".banner_nav li").eq($lunbo_index).stop().fadeIn();
    }
    $(".banner_btn li").on("click",function(){
        $(this).siblings().removeClass("action");
        $(this).addClass("action");
        $lunbo_index=$(this).index();
        lunShow();
    });
    
    
});