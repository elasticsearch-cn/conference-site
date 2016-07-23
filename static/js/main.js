/**
 * Created by shiyang on 16/5/8.
 */


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
    $("#navbar").find(".curr-city").text(currCity);

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