$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
    })
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    var typed = new Typed(".typing",{
        strings: ["Developer","Freelancer","Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })
    var typed = new Typed(".typing-1",{
        strings: ["Developer","Freelancer","Designer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })
    $('.skill-percent').each(function() {

        $(this).animate({
            width: $(this).attr('data-percent')


        })

    });
    $(".teams-content").owlCarousel({

        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,

            },
            992: {
                items: 3

            }

        }

    });
})