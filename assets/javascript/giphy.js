// this file holds the Giphy API code 


var actor = $("#search").val().trim();


function displayGifs(actor){

// var topic = $(this).attr("data-name");

var giphyQueryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=a4LGOXb9Mib8LjW2K5iuZwlrktAX8mI2&limit=3";

$.ajax({
    url: giphyQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response)


    for (var i = 0; i < response.data.length; i++) {
       
        var gif = $("<img>");
        gif.addClass("gif")
        gif.attr("src", response.data[i].images.fixed_height.url);
        $("#giphy").append(gif)
    }
});
    $("#giphy").empty()

}





