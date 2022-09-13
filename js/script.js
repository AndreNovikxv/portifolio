//scroll menu
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    })
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

    // Digita e apaga
    var typed = new Typed(".typing", {
        strings: ["Front-End Developer", "Freelancer", "FullStack Developer", "Web Designer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //click hamburguer
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    var typed = new Typed(".typing-2", {
        strings: ["Front-End Developer", "Freelancer", "FullStack Developer", "Web Designer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    //carrossel
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
})