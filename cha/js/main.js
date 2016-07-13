 document.documentElement.style.fontSize = window.innerWidth/3.75 + 'px';
 
 var swiper = new Swiper('.swiper-container', {
     pagination: '.swiper-pagination',
     direction: 'vertical',
     scrollbarHide: true,
     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
         swiperAnimateCache(swiper); //隐藏动画元素 
         swiperAnimate(swiper); //初始化完成开始动画
     }, 
     onSlideChangeEnd: function(swiper){ 
         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
         cssDefault(swiper.activeIndex);
         if(swiper.activeIndex==0){
         	$(".swiper-slide.one").find(".jian").css("-webkit-animation","jiantou 1.2s  infinite ease-in-out");
         	$(".swiper-slide.one").find(".one_nav").css("-webkit-animation","onebgmove 10s infinite linear");
         }else if(swiper.activeIndex==1){
         	$(".swiper-slide.two").find(".jian").css("-webkit-animation","jiantou 1.2s  infinite ease-in-out");
         	$(".swiper-slide.two").find(".two_light").css({"-webkit-animation":"twobgmove 0.8s infinite ease-in-out","-webkit-animation-delay": "1s"});
         	$(".swiper-slide.two").find(".two_xing").css({"-webkit-animation":"twobgmove 1s infinite linear","-webkit-animation-delay": "1s"});
         }else if(swiper.activeIndex==2){
            $(".swiper-slide.three").find(".jian").css("-webkit-animation","jiantou 1.2s  infinite ease-in-out");
             $(".swiper-slide.three").find(".three_light").css({"-webkit-animation":"twobgmove 0.8s infinite ease-in-out","-webkit-animation-delay": "1s"});
         	$(".swiper-slide.three").find(".three_xing").css({"-webkit-animation":"twobgmove 1s infinite linear","-webkit-animation-delay": "1s"});
         }else if(swiper.activeIndex==3){
            $(".swiper-slide.four").find(".jian").css("-webkit-animation","jiantou 1.2s  infinite ease-in-out");
            $(".swiper-slide.four").find(".four_light_l").css({"-webkit-animation":"twobgmove 1s infinite ease-in-out","-webkit-animation-delay": "1s"});
            $(".swiper-slide.four").find(".four_light_r").css({"-webkit-animation":"fourbgmove 1s infinite ease-in-out","-webkit-animation-delay": "1s"});
            $(".swiper-slide.four").find(".four_you").css("-webkit-animation",'qqbounce 1s infinite linear');
        }else if(swiper.activeIndex==4){
    		$(".swiper-slide.five").find(".jian").css("-webkit-animation","jiantou 1.2s  infinite ease-in-out");
    	}else if(swiper.activeIndex==5){
    		$(".swiper-slide.six").find(".search_txt").css({"-webkit-animation":"last 3s linear","-webkit-animation-delay": "2s"});
    	}
      } 
 });

function cssDefault(falg){
	$(".swiper-slide").find(".jian").css("-webkit-animation",null);
    $(".swiper-slide.one").find(".one_nav").css("-webkit-animation",null);

    $(".swiper-slide.two").find(".two_light").css("-webkit-animation",null);
    $(".swiper-slide.two").find(".two_xing").css("-webkit-animation",null);

    $(".swiper-slide.three").find(".three_light").css({"-webkit-animation":null});
    $(".swiper-slide.three").find(".three_xing").css({"-webkit-animation":null});

    $(".swiper-slide.four").find(".four_light_l").css("-webkit-animation",null);
  	$(".swiper-slide.four").find(".four_light_r").css("-webkit-animation",null);

	$(".swiper-slide.four").find(".four_you").css("-webkit-animation",null);
	
	$(".swiper-slide.six").find(".search_txt").css({"-webkit-animation":null});
	
	
}

$(".music").on("tap",function(){
	if($("audio")[0].paused){
		$('audio')[0].play();
		$(this).removeClass("paused");
		$(this).addClass("play");
	}else{
		$('audio')[0].pause();
		$(this).removeClass("play");
		$(this).addClass("paused");
	}
});









