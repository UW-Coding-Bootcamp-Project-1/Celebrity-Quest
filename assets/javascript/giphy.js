// this file holds the Giphy API code 

function displayGif(){
var topic = $(this).attr("data-name");

var giphyQueryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=a4LGOXb9Mib8LjW2K5iuZwlrktAX8mI2&limit=5";

$.ajax({
    url: giphyQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
});

var gifImg = $("<img>")

gifImg.attr("src", response.data.images.fixed_height.url)

$("#giphy").append(gifImg)


console.log("hello")

}


