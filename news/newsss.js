var request = new XMLHttpRequest();
request.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5280d30436664906abefe8b3110761d1", true);
request.send();
request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) {
            var articles = JSON.parse(request.responseText).articles;
            newsgen(articles);
    } 
};


var newsgen = function generateTemplate(newsArray) {
    console.log(newsArray);
    var template = '';
    for (var i = 0; i<newsArray.length; i++) {
        var current = newsArray[i];
        template = template + `<div class="news">
                            <h3>${current.title}</h3>
                            <p>${current.description}</p>
                        </div>`
    }
    document.getElementById('newsData').innerHTML = template;
}