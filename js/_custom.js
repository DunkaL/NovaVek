document.addEventListener("DOMContentLoaded", function () {


    let sliderLeng = $('#slider-vertical .content__slider').length;
    $('#slider-vertical-quantity').text(sliderLeng);


    $('#button-dropdown-phone').click(function () {
        $('#block-dropdown-phone').addClass('d-block');
    });
    $('.modal-request-a-call__close').click(function () {
        $('#block-dropdown-phone').removeClass('d-block');
    });


    $('#button-dropdown-contacts').click(function () {
        $('#block-dropdown-contacts').toggleClass('d-block');
    });

    $('.product-page__additional-goods__button').click(function () {
        $('.product-page__additional-goods').toggleClass('bottom-0');
    })

    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 9,
        slideMargin: 0,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });

    $('#slider-vertical').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        vertical: true,
        speed: 700,
        enableDrag: false
    });

    $('.slider-block').slick({
        item: 1,
        dots: true
    });

    $('#slider-vertical-top-arrow').click(function () {
        $('.lSPrev').trigger('click');
        let siderCurrent = $('#slider-vertical-current').text();
        if (siderCurrent > 1) {
            siderCurrent--
            $('#slider-vertical-current').text(siderCurrent)
        }
    })

    $('#slider-vertical-bottom-arrow').click(function () {
        $('.lSNext').trigger('click');
        let siderCurrent = $('#slider-vertical-current').text();
        if (siderCurrent < sliderLeng) {
            siderCurrent++
            $('#slider-vertical-current').text(siderCurrent)
        }
    })

    $('#buttonSidebar').click(function () {
        $('#sidebar').addClass('left-0');
    })

    $('#buttonSidebar-close').click(function () {
        $('#sidebar').removeClass('left-0')
    })

    
    let isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
      };
    if(isMobile.any()){ 
        $(".header__menu-nav").addClass('touch');
        let HeaderArrow = $('.nav-item .header__nav-link');
        for(i=0; i<HeaderArrow.length; i++){
                let subMenu = HeaderArrow[i].nextElementSibling;
                // let thisArrow=HeaderArrow[i];
            HeaderArrow[i].addEventListener('click', function(){
                subMenu.classList.toggle('active');
                // thisArrow.classList.toggle('active');
            });
        }
    }else{
        $(".header__menu-nav").addClass('mouse');
    }

    $('#navToggle').click(function(){
        $('#navToggle').toggleClass('burger-active');
        $('.header__menu-nav').toggleClass('right-0')
    });

    $('#sidebar__toggle-btn').click(function(){
        $('#sidebar').toggleClass('top-0')
    })

    $('#button-filter').click(function(){
        $('#filter').addClass('left-0');
    })

    $('#filter-close').click(function(){
        $('#filter').removeClass('left-0')
    })

});