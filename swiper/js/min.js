 var swiper = new Swiper('.swiper-container', {
     pagination: '.swiper-pagination',
     paginationClickable: true,
     direction: 'vertical',
     loop: true,
     onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
         swiperAnimateCache(swiper); //隐藏动画元素 
         swiperAnimate(swiper); //初始化完成开始动画
     }, 
     onSlideChangeEnd: function(swiper){ 
         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      } 
 });

$("#music").on("tap",function(){
    if($('audio')[0].paused){
        $("audio")[0].play();
        $(this).find("img").eq(0).css("display","block");
        $(this).find("img").eq(1).css("animation","music 2s infinite linear");
    }else{
        $("audio")[0].pause();
        $(this).find("img").eq(0).css("display","none");
        $(this).find("img").eq(1).css("animation","none");
    }
});








