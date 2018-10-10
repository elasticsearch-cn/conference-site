/**
 * Created by shiyang on 16/5/8.
 */

//begin include third-party js

document.writeln('<script language="javascript" charset="utf-8" src="/static/js/google-analytics.js"></script>');

//end include third-party js
$(window).scroll(function(){
    handleTopNavAnimation();
});

$(window).load(function(){
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top=$(window).scrollTop();

    if(top>60){
        $('#site-nav').addClass('navbar-solid');
    } else{
        $('#site-nav').removeClass('navbar-solid');
    }
}

smoothScroll.init();

$(function(){
    var url = window.location.href ;
    var currCity = getCurrCity(url);
    $(".curr-city").text(currCity);

});

/**
 * 获取当前会议主办城市
 *
 * @param url
 * @returns {string}
 */
function getCurrCity(url) {
    var city = {"beijing":"北京","shanghai":"上海","guangzhou":"广州","chengdu":"成都"};
    var currCity = "首页";
    var pageName = getCurrPage(url);
    if(pageName) {
        for(var key in city) {
            if(key == pageName) {
                currCity = city[pageName];
                break;
            }
        }
    }
    return currCity;
}

/**
 * 根据当前url获取当前page名称
 *
 * @param url
 * @returns {*}
 */
function getCurrPage(url) {
    var arr = url.split( "/" );
    var thisPage = arr[ arr.length-1 ];
    if(thisPage) {
        return thisPage.split(".")[0];
    }
    return null;
}

/**
 * 延时N秒自动触发:批量更新指定容器的所有图片src
 * fix lazyload.js not work and bootstrap carousel only show first image
 *
 */
function lazyCarouselImg() {
    setTimeout(function(){
        $('.carousel-inner img.lazy').each(function(){
            $(this).attr('src', $(this).attr('data-original'));
        });
    }, 5000);
}

$(function(){
    /**
     * 关闭弹出层
     */
    $('#layer-shade').on('click', function(){
        $(this).css('display','none');
        $('.layer').css('display','none');
    });


    //回到顶部
    $(".right-tool").on("click",'.go-top', function(){
        var _this = $(this);
        $('html,body').animate({ scrollTop: 0 }, 500 ,function(){
            _this.hide();
        });
    }).on("click",'.share-qrcode', function(){
        $('#layer-shade').show();
        $('#layer').show();
    }).on("mouseover",'.share-qrcode', function(){
        $(this).children('.text').show();
        $(this).children('.img').hide();
    }).on("mouseout",'.share-qrcode', function(){
        $(this).children('.text').hide();
        $(this).children('.img').show();
    });

    $(".show-live-url").on("click", function(){
        $('#layer-shade').show();
        $('#layer-elastic-cn').show();
    });

    $(window).scroll(function(){
        var htmlTop = $(document).scrollTop();
        var headerHeight = $('#site-header').height();
        if( htmlTop > headerHeight){
            $(".go-top").show();
        }else{
            $(".go-top").hide();
        }
    });

    //精彩图集图片轮播
    // $('.carousel').carousel();

});

