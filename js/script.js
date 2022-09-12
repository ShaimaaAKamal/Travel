$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1 
        },
        768:{
            items:2         

        },
        992:{
            items:3            

        }
    }
});
