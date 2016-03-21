jQuery.extend(jQuery.easing,{
    easeInOutExpo: function(x, t, b, c, d){
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

$(document).ready(function(){

    $('a[href="#"]').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $('.'+$(this).data('scrollto')).offset().top-65 }, 700, 'easeInOutExpo', function(){});
    });
    
    $("header nav ul li a").click(function() {
            $("header nav ul li a").removeClass("active");
            $(this).addClass("active");
        });
        
    $(document).on("scroll", onScroll);
    
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('header nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
});


