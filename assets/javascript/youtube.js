// Storing YouTube API key & URL
var topic = $(this).attr("data-name");
var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="  + topic + "&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

// Creating AJAX Call
$.ajax({
    url: youtubeURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
<<<<<<< HEAD

  })
=======
  });
>>>>>>> 25807cc456ce0c1a5a1a13b537f9cfcee3699ad3
