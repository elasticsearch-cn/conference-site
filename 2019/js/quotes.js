//大会推荐语
function getQuote() {

data =[
  {
    "name":"黄思宇",
    "company":"阿里巴巴",
    "title":"技术专家",
    "content":"参加过，值得推荐！"
  },
  {
    "name":"黄琛",
    "company":"OneAPM",
    "title":"首席架构师",
    "content":"Elastic技术栈非常适合半结构化数据的收集、存储和分析，用好能够极大提高生产效率。参加开发者大会能够开阔眼界，学习广大同行如何更好让Elastic落地，非常有价值！"
  },
  {
    "name":"白凡",
    "company":"尚德机构",
    "title":"工程师",
    "content":"这是一个ES交流很棒的平台，除了能学到更多优秀开发者的分享，也能拿到很多不错的周边。"
  }
]

var index = random(0, data.length - 1);
            console.log(index);
            var item = data[index];
            $(".quotes-content").text(item.content);
            $(".quotes-company").text(item.company + item.title);
            $(".quotes-name").text(item.name);

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

getQuote();