// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

$('.c-carousel__wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

$('.left').click(function(){
    $('.c-carousel__wrapper').slick('slickPrev');
})

$('.right').click(function(){
    $('.c-carousel__wrapper').slick('slickNext');
})

// equalheight slides

$('.c-carousel__wrapper').on('setPosition', function (event, slick) {
$(slick.$slides).height('auto').css('height', $(slick.$slideTrack).height() + 'px');
});