$(document).ready(function () {
    // sett current product price
    let selects = $('[data-product-variant-select]');
    $(selects).each(function () {
        $(this).on('change', function () {
            onSelectChange($(this));
        });
    });

    $(selects).each(function () {
        $(this).on('change', function () {
            let value = $(this).val();
            $(selects).each(function () {
                $(this).find('option').each(function () {
                    if ($(this).val() == value) {
                        $(this).attr('selected', '');
                    } else {
                        $(this).removeAttr('selected');
                    }
                })
            });
        });
    });

    function onSelectChange(select){
        var optionSelected = $('option:selected', $(select)).val();
        var updatePrice = $('option:selected', $(select)).data('price-money');
        var updateComparePrice = $('option:selected', $(select)).data('compare-price');
        var updateDiscount = $('option:selected', $(select)).data('discount-percentage');

        $('.current_price').each(function () {
            $(this).html(updatePrice);
        });
        $('.compare-price-preview').each(function () {
            $(this).html(updateComparePrice);
        });
        $('.compare-price-discount').each(function () {
            if (updateDiscount){
                $(this).html('Save ' + updateDiscount);
            } else {
                $(this).html('');
            }
        });
    }

    // switching between tabs(descriptions etc.) in section-single-product-clarifying-hydrating-dew.liquid

    // $('.tab').each(function () {
    //
    //     var currentTab = $(this).hasClass('tab-active');
    //     if(currentTab == true){
    //         this.each(function (i) {
    //             let y = i.addClass('tab-active');
    //             console.log(y);
    //         })
    //     }
    // });

    $('.tab').on("click", function () {
        $(this).addClass('tab-active');
        var tabNumber = $(this).attr('data-tab');
        $('li.tab').each(function (index, el) {
            if (el.getAttribute('data-tab') === tabNumber) {
                $(el).addClass('tab-active');
            }else{
                $(el).removeClass('tab-active');
            }
        });
        $('.tab-content').each(function (index, el) {
            if (el.getAttribute('data-tab') === tabNumber) {
                $(el).css({display: 'block'});
            } else {
                $(el).css({display: 'none'});
            }
        });
    });

    // build, destroy slick for related products
    $(window).resize(function(e){
        if(window.innerWidth < 769) {
            if (!$('#slider').hasClass('.slick-initialized')) {
                displayMobileSlider();
            }
        }else{
            if($('#slider').hasClass('slick-initialized')) {
                $('#slider').slick('unslick');
            }
        }
    });

    function displayMobileSlider() {
        $('#slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }
});



