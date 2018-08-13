//大会推荐语
getQuote();
function getQuote() {
    $.ajax({
        type:'GET',
        url : "/2018/js/quotes.json",
        datatype: "json",
        success : function(data) {
            var index = Math.floor((Math.random() * data.length));
            var item = data[index];
            $(".quotes-content").text(item.content);
            $(".quotes-company").text(item.company + item.title);
            $(".quotes-name").text(item.name);
        }
    });
}