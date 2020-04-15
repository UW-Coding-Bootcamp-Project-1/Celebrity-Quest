$(document).ready(function() {

// Storing YouTube API key & URL
function videos() {
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="  + actor + "&limit=3&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

  // My API Key - AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4

  //Test
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?q=something&key=YOUR_API_KEY&fields=items(id,snippet(title,thumbnails(default))&part=snippet"

  var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&?q=" + celebrity + "&limit=1&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";
  var celebrity = $("#search").val().trim();

  // Ashley's API - AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM


  // Creating AJAX Call
  $.ajax({
      url: youtubeURL,
      method: "GET",
    }).then(function(response) {
      console.log(response)
              
      for (var i = 0; i < response.items.length; i++) {

      // Container for videos
      var vidDiv = $("<div>");

      var videoPlayer = $('<video />', {
        id: vidId,
        src: 'https://www.youtube.com/watch?v=' + vidId,
        type: 'video/mp4',
        controls: true
    });

      // Gathering video info
      var vidTitle = $("#vidTitle").text("Title: " + response.items[i].snippet.title);
      var vidDesc = $("#desc").text(response.items[i].snippet.description);
      var vidId = response.items[i].id.videoId;

      // vidDiv.empty();
      // var videoPlayer = $("<video>");
      // videoPlayer.attr('src', "'https://www.youtube.com/embed/" + vidId + "'");
      // videoPlayer.attr('type', "video");
      // videoPlayer.attr('width', 320);
      // videoPlayer.attr('height', 240);
      
      vidDiv.append(vidTitle)
      $("<video>").append(videoPlayer);
      vidDiv.append(vidDesc);

      $("#youtube").append(vidTitle, videoPlayer, vidDesc)

      }
    });
  }
  videos();
});