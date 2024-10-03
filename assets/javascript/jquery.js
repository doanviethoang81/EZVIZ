$(function () {
    // thay đổi backgroup trên header 
    $(window).scroll(function (event) {
        var location = $(window).scrollTop();
        var headerElements = document.querySelectorAll('.header--white'); //lấy tất cả các class
        var headerElements2 = document.querySelectorAll('.header--white--black');
        if (location > 0) { // cuộn thanh kéo
            headerElements.forEach(function (element) {// xóa class cũ và thêm
                element.classList.replace('header--white', 'header--white--black');
            });
        } else {
            headerElements2.forEach(function (element) {
                element.classList.replace('header--white--black', 'header--white');
            });
        }
    })

    // giữ nguyên trạng thái hover của header
    $(".header").hover(
        function () {
            var headerElements = document.querySelectorAll('.header--white'); //lấy tất cả các class
            headerElements.forEach(function (element) {// xóa và thêm
                element.classList.replace('header--white', 'header--white--black');
            });
        },
    );

    //slick của sub nav
    $('.slick-sliderr').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });

    // tạo thanh lướt lên top
    $('.backtop').hide();
    $(window).scroll(function (event) {
        var location = $(window).scrollTop();
        if (location > 1200) {
            $('.backtop').fadeIn();
        }
        else {
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    });

    // $(document).ready(function(){
    //     $('.nav-menu-item').on('mouseenter', function() {
    //       $(this).find('.nav-menu-sub').css('display', 'block');
    //     }).on('mouseleave', function() {
    //       $(this).find('.nav-menu-sub').css('display', 'none');
    //     });
    //   });

});

// click sub nav ẩn hiện
$(document).ready(function () {

    $(".slick-prev").hide();// ẩn click prev trước
    //đếm số lần click
    var clickCount = 0; // Biến đếm số lần click 
    var maxClicks = 2;  // Số lần click tối đa trước khi ẩn

    // click đủ 2 lần thì tự động ẩn phần click số 2 đó
    $(".slick-next").click(function () {
        $(".slick-prev").show(); // hiện click prev
        clickCount++; //reset lại click next
        if (clickCount >= maxClicks) {
            $(".slick-next").hide(); // ẩn phần tử
            clickCount = 0;
        }
    });

    $(".slick-prev").click(function () {
        $(".slick-next").show(); //hiện cick next
        clickCount++; //reset lại click prev
        if (clickCount >= maxClicks) {
            $(".slick-prev").hide();
            clickCount = 0;
        }
    });

    // slider sản phẩm trong các khung cảnh
    // mặc đỉnh ẩn
    $('.button-slider-wrap-item-hide').hide();
    var temp = 0; //trạng thái mặc đinh 
    // lấy tất cả các button trong div có id là "button-slider-wrap"
    $('.button-slider-wrap .button-slider-wrap-click').each(function (index) {//bat dau index =0
        //mặc định hiện button đầu tiên khi load
        //ẩn icon của index
        $('.button-slider-wrap-click-icon').eq(0).hide();
        //ẩn title
        $('.button-slider-wrap-title').eq(0).hide();
        // Hiện item tương ứng với vị trí button
        $('.button-slider-wrap-item-hide').eq(0).show();

        //thêm sự kiện click vào mỗi button
        $(this).click(function () {
            temp = index;// gán lại để cho click next vs prev
            // ẩn tất cả các item trước khi hiện item mới
            $('.button-slider-wrap-item-hide').hide();

            //hiện lại các nút k liên quan
            $('.button-slider-wrap-click-icon').show();
            $('.button-slider-wrap-title').show();

            //ẩn icon của index
            $('.button-slider-wrap-click-icon').eq(index).hide();

            //ẩn title
            $('.button-slider-wrap-title').eq(index).hide();

            // hiện item tương ứng với vị trí button
            $('.button-slider-wrap-item-hide').eq(index).show();
        });
    });

    // chuyển hiệu ứng khi click next slider
    $('.button_slider_icon-blue').click(function () {//next
        temp++;
        if(temp == 4){ //nếu =4 nghĩa là hết slider có 0123
            temp =0;// gán lại =0
        }

        $('.button-slider-wrap-item-hide').hide();

        //hiện lại các nút k liên quan
        $('.button-slider-wrap-click-icon').show();
        $('.button-slider-wrap-title').show();

        //ẩn icon của index
        $('.button-slider-wrap-click-icon').eq(temp).hide();

        //ẩn title
        $('.button-slider-wrap-title').eq(temp).hide();

        // hiện item tương ứng với vị trí button
        $('.button-slider-wrap-item-hide').eq(temp).show();
    });

    // chuyển hiệu ứng khi click prev slider
    $('.button_slider_icon-white').click(function () {//prev
        temp--;        
        if(temp < 0){ //nếu <0 nghĩa là hết slider có 0123
            temp = 3 ;// gán lại =3
        }

        $('.button-slider-wrap-item-hide').hide();

        //hiện lại các nút k liên quan
        $('.button-slider-wrap-click-icon').show();
        $('.button-slider-wrap-title').show();

        //ẩn icon của index
        $('.button-slider-wrap-click-icon').eq(temp).hide();

        //ẩn title
        $('.button-slider-wrap-title').eq(temp).hide();

        // hiện item tương ứng với vị trí button
        $('.button-slider-wrap-item-hide').eq(temp).show();
    });

    $('.product-smart-home').hide();
    // khi click vào kệt tác về an ninh hiện ra các sản phẩm khác
    $(".button-detail-camera-security").click(function(){
        $(".button-detail-click").removeClass("button-detail-click");// tìm các phần tử có class click và xóa
        $(this).addClass("button-detail-click");
        $('.product-smart-home').hide();
        $('.product-camera-security').show();
    });

    $(".button-detail-smart-home").click(function(){
        $(".button-detail-click").removeClass("button-detail-click");// tìm các phần tử có class click và xóa
        $(this).addClass("button-detail-click");
        $('.product-camera-security').hide();
        $('.product-smart-home').show();

    });
});