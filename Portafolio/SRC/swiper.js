const swiper = new Swiper(".swiperCertificated",{
    zoom: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect:{
        rotate:50,
        depth:0,
        modifier:1,
        slideShadows: true,
    } ,

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    }
})