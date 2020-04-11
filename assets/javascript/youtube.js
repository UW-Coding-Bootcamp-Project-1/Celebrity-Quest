// Storing YouTube API key & URL
var topic = $(this).attr("data-name");
var youtubeURL = "https://www.googleapis.com/youtube/v3/channels" + topic + "&AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

// Creating AJAX Call
$.ajax({
    url: youtubeURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });