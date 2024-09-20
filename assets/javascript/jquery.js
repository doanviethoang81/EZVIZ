$(function () {
    // thay đổi backgroup trên header 
    $(window).scroll(function (event) {
        var location = $(window).scrollTop();
        if (location > 0) { // thêm class mới xóa class cũ
            $(".header, .nav-menu-item-link, .header__nav-right-search a, .header__nav-right-languege a").each(function () {
                if (!$(this).hasClass("header--white--black")) { //kiểm tra xem đã có class này chưa
                    $(this).removeClass("header--white").addClass("header--white--black");
                }
            });
        } else {
            $(".header, .nav-menu-item-link, .header__nav-right-search a, .header__nav-right-languege a").each(function () {
                if (!$(this).hasClass("header--white")) {
                    $(this).removeClass("header--white--black").addClass("header--white");
                }
            });
        }
    })

    // giữ nguyên trạng thái hover của header
    $(".header").hover(
        function () { // Khi hover vào phần tử lặp các class đc chọn
            $(".header ,.nav-menu-item-link ,.header__nav-right-search a,.header__nav-right-languege a").each(function () { //thay đổi tên class 
                $(this).removeClass("header--white").addClass("header--white--black");
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
    $(window).scroll(function(event){
        var location =$(window).scrollTop();
        if(location > 1200){
            $('.backtop').fadeIn();
        }
        else{
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function(){
        $('html, body').animate({
            scrollTop:0
        },100);
    });
});
