document.addEventListener("DOMContentLoaded", function () {

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

        let sliderParallax = $('.js-slider-parallax');
        for (let i = 0; i < sliderParallax.length; i++) {
            window.addEventListener('mousemove', function(e) { 
                let x = e.clientX / window.innerWidth;
                let y = e.clientY / window.innerHeight; 
                sliderParallax[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
            });
        }

    }

    let sliderLeng = $('#slider-vertical .content__slider').length;
    $('#slider-vertical-quantity').text(sliderLeng);


    $('#button-dropdown-phone').click(function () {
        $('#block-dropdown-phone').addClass('d-block');
    });
    $('#block-dropdown-phone__close').click(function () {
        $('#block-dropdown-phone').removeClass('d-block');
    });
    $('#block-dropdown-phone .modal-windows__bg').click(function () {
        $('#block-dropdown-phone').removeClass('d-block');
    });


    $('#button-dropdown-partner').click(function () {
        $('#block-dropdown-partner').addClass('d-block');
    });
    $('#block-dropdown-partner__close').click(function () {
        $('#block-dropdown-partner').removeClass('d-block');
    });
    $('#block-dropdown-partner .modal-windows__bg').click(function () {
        $('#block-dropdown-partner').removeClass('d-block');
    });


    $('#button-dropdown-contacts').click(function () {
        $('#block-dropdown-contacts').toggleClass('d-block');
    });

    $('.product-page__additional-goods__button').click(function () {
        $('.product-page__additional-goods').toggleClass('bottom-0');
    })

    // $('#imageGallery').lightSlider({
    //     gallery: true,
    //     item: 1,
    //     loop: true,
    //     thumbItem: 9,
    //     slideMargin: 0,
    //     enableDrag: false,
    //     currentPagerPosition: 'left',
    //     onSliderLoad: function (el) {
    //         el.lightGallery({
    //             selector: '#imageGallery .lslide'
    //         });
    //     }
    // });

    $('#imageGallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#imageGallery-nav'
    });
    $('#imageGallery-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#imageGallery',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('#imageGallery li').on("click",function(){
        $('body').append(`
            <div class="product-page__slider-viewing" id="product-page-slider-viewing">
                <div class="bg-fon-close position-absolute h-100 w-100"></div>
                <div class="product-page__slider-control">
                    <div class="product-page__slider-control-close" id="product-page-slider-control-close">
                        <img src="img/svg/cross.svg" alt="cross-icon">
                    </div>
                    <a href="" download class="product-page__slider-control-download" id="product-page-slider-control-dowload">
                        <img src="img/svg/download-icon.svg">
                    </a>
                </div>
                <img src="" class="product-page__slider-viewing-image">
            </div>
        `);
        let linkSrc = $(this).data('src');
        setTimeout(function(){
            $('#product-page-slider-viewing').addClass('in')
            $('#product-page-slider-viewing .product-page__slider-viewing-image').attr('src', linkSrc)
            $('#product-page-slider-control-dowload').attr('href', linkSrc)
        },200)
    })

    $(document).on("click",'#product-page-slider-control-close',function(){
        $('#product-page-slider-viewing').removeClass('in');
        setTimeout(function(){
            $('#product-page-slider-viewing').remove();
        },200)
    })

    $(document).on("click",'#product-page-slider-viewing .bg-fon-close',function(){
        $('#product-page-slider-viewing').removeClass('in');
        setTimeout(function(){
            $('#product-page-slider-viewing').remove();
        },200)
    })

    var sliderVertical = $('#slider-vertical').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        vertical: true,
        speed: 700,
        enableTouch: false,
        enableDrag: false,
        controls: false,
        pager: false
    });

    $('#slider-vertical-top-arrow').click(function(){
        sliderVertical.goToPrevSlide(); 
        let siderCurrent = $('#slider-vertical-current').text();
        if (siderCurrent > 1) {
            siderCurrent--
            $('#slider-vertical-current').text(siderCurrent)
        }
    });

    $('#slider-vertical-bottom-arrow').click(function(){
        sliderVertical.goToNextSlide(); 
        let siderCurrent = $('#slider-vertical-current').text();
        if (siderCurrent < sliderLeng) {
            siderCurrent++
            $('#slider-vertical-current').text(siderCurrent)
        }
    });

    $('.slider-block').slick({
        item: 1,
        dots: true,
        prevArrow: `
        <div class="content__slider-arrow content__slider-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.753" height="104.968" viewBox="0 0 30.753 104.968">
                <g id="Group_45" data-name="Group 45" transform="translate(-179 -286.032)">
                <path id="Path_2" data-name="Path 2" d="M0,0-14.253,50.525,1,100" transform="translate(195.253 288.5)" fill="none" stroke="#bdbcbc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                <path id="Path_3" data-name="Path 3" d="M0,0-14.253,50.525,1,100" transform="translate(206.253 288.5)" fill="none" stroke="#bdbcbc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                </g>
            </svg>
        </div>`,
        nextArrow: `
        <div class="content__slider-arrow content__slider-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.753" height="104.968" viewBox="0 0 30.753 104.968">
                <g id="Group_45" data-name="Group 45" transform="translate(209.753 391) rotate(180)">
                <path id="Path_2" data-name="Path 2" d="M0,0-14.253,50.525,1,100" transform="translate(195.253 288.5)" fill="none" stroke="#bdbcbc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                <path id="Path_3" data-name="Path 3" d="M0,0-14.253,50.525,1,100" transform="translate(206.253 288.5)" fill="none" stroke="#bdbcbc" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                </g>
            </svg>									  
        </div>`
    });

    $('#buttonSidebar').click(function () {
        $('#sidebar').addClass('left-0');
    })

    $('#buttonSidebar-close').click(function () {
        $('#sidebar').removeClass('left-0')
    })

    $('#navToggle').click(function(){
        $('#navToggle').toggleClass('burger-active');
        $('.header__menu-nav').toggleClass('right-0')
    });

    $('#sidebar__toggle-btn').click(function(){
        $('#sidebar').toggleClass('bottom-0')
    })

    $('#button-filter').click(function(){
        $('#filter').addClass('left-0');
        $('#content').addClass('overflow-hidden');
        $('body').addClass('overflow-hidden');
    })

    $('#filter-close').click(function(){
        $('#filter').removeClass('left-0');
        $('#content').removeClass('overflow-hidden');
        $('body').removeClass('overflow-hidden');
    })

    function Height(block, takeAway) {
        let vh = window.innerHeight * 0.01;
        let height = vh * 100 - takeAway;
        $(block).css("height",height+'px');
    }
    if (window.innerWidth > 500) {
        Height('.content', 60);
        Height('.content__slider', 128);
        Height('.slider-block__slide', 128);
        window.addEventListener('resize', () => {
            Height('.content', 60);
            Height('.content__slider', 128);
            Height('.slider-block__slide', 128);
        });   
    }else{
        Height('.content', 97);
        Height('.content__slider', 165);
        Height('.slider-block__slide', 165);
        window.addEventListener('resize', () => {
            Height('.content', 97);
            Height('.content__slider', 165);
            Height('.slider-block__slide', 165);
        });   
    }


    $('.documentation__description-slider').slick({
        arrows: false,
        dots: true
    });

});