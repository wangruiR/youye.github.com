$(function () {
    var flag = 0;
    $(".show_nav").on("swipeRight", function () {
        if (flag > 0) {
            console.log(flag);
            flag--;
            showChange(flag, $(this));
        }

    });
    $(".show_nav").on("swipeLeft", function () {
        if (flag < 3) {
            console.log(flag);
            flag++;
            showChange(flag, $(this));
        }
    });

    function showChange(flag, obj) {
        obj.css("transform", "translate(-" + flag * 25 + "%)");
        $(".show_sub_nav span").removeClass("action");
        $(".show_sub_nav span").eq(flag).addClass("action");
    }
});