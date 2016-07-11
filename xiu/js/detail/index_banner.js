 $(function () {
     var flag = 1;
     $(".index_b_ul").on("swipeRight", function () {
         if (flag > 0) {
             flag--;
             change(flag, true);
         }
     });
     $(".index_b_ul").on("swipeLeft", function () {
         if (flag < 5) {
             flag++;
             change(flag, true);
         }
     });

     $(".index_b_ul")[0].addEventListener("webkitTransitionEnd", function () {
         /*$(this).css("transition","all 0s");*/
         //console.log($(this).offset().left - $(this).width() * (0.7))
         if ($(this).offset().left == 0) {
             flag = 4;
             $(this).css("transition", "all 0s");
             change(flag, false);

         } else if (-($(this).offset().left) >= $(this).width() * (0.83)) {
             flag = 1;
             $(this).css("transition", "all 0s");
             change(flag, false);
         }



     }, false);


     function change(flag, fn) {
         if (fn) {
             $(".index_b_ul").css("transition", "all 0.6s");
         }
         var offset = flag * 16.666666;
         $(".index_b_ul").css("transform", 'translateX(-' + offset + '%)');
         $(".index_b_subul li").removeClass("action");
         if (flag > 3) {
             flag = 0;
         }
         $(".index_b_subul li").eq(flag - 1).addClass("action");

     }

 });