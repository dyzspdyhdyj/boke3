
$(function () {
    myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false})


    $('#scroller').on('click','li',function () {
        if($(this).hasClass('active')){
            return;
        }
        arr2=[];
        $(this).siblings().removeClass('active').end().addClass('active');
        let text =$(this).html();

    })
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        loop:true,
        autoplay:{
            autoplay:true,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.midright').click(function () {
        location.href='pic.html'
    })

})