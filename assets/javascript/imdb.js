//var celebrity = $("#search").val().trim();
//console.log("celebrity: ", celebrity);

/*var queryUrl = "https://newsapi.org/v2/everything?q=" + celebrity + "&apiKey=f9a29869e5cd42f4b0d2a6a4b9a85c6c";*/


//Add to on-click function: $("#actor-name").text(celebrity);
function displayArticles(celebrity) {

  var queryUrl = "https://newsapi.org/v2/everything?q=" + celebrity + "&apiKey=f9a29869e5cd42f4b0d2a6a4b9a85c6c";


    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then (function(response){
      console.log(response);

      var title1 = response.articles[0].title;

      var articleUrl1 = response.articles[0].url;
      var articleLink1 = $('<a href="' + articleUrl1 + '" target="_blank">' + title1 + '</a>');
      $("#article1").append(articleLink1);

      var imgUrl1 = response.articles[0].urlToImage;
      var articleImg1 = $('<img src="' + imgUrl1 + '" width="400">');
      $("#article1").append(articleImg1);
    

      var title2 = response.articles[1].title;

      var articleUrl2 = response.articles[1].url;
      var articleLink2 = $('<a href="' + articleUrl2 + '" target="_blank">' + title2 + '</a>');
      $("#article2").append(articleLink2);

      var imgUrl2 = response.articles[1].urlToImage;
      var articleImg2 = $('<img src="' + imgUrl2 + '" width="400">');
      $("#article2").append(articleImg2);
      

      var title3 = response.articles[2].title;

      var articleUrl3 = response.articles[2].url;
      var articleLink3 = $('<a href="' + articleUrl3 + '" target="_blank">' + title3 + '</a>');
      $("#article3").append(articleLink3);

      var imgUrl3 = response.articles[2].urlToImage;
      var articleImg3 = $('<img src="' + imgUrl3 + '" width="400">');
      $("#article3").append(articleImg3);
      


    });

}    

/*function userSearch2(){
    var addSearch = $("#search").val().trim();

    actor.push(addSearch)
    console.log("celebrity", celebrity);

    displayArticles()
}*/