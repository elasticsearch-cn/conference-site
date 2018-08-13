//大会推荐语
getQuote();
function getQuote() {
    $.ajax({
        type:'GET',
        url : "/2018/js/quotes.json",
        datatype: "json",
        success : function(data) {
            var index = random(0, data.length - 1);
            console.log(index);
            var item = data[index];
            $(".quotes-content").text(item.content);
            $(".quotes-company").text(item.company + item.title);
            $(".quotes-name").text(item.name);
        }
    });
}

/**
 * 指定区间获取随机整数
 * @param min
 * @param max
 * @returns {number}
 */
function random(min,max) {
    return parseInt(Math.random()*(max-min+1)+min,10);
}