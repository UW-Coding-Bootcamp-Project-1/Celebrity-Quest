// Storing YouTube API key & URL
function videos(celebrity) {
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="  + actor + "&limit=3&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

  // My API Key - AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4

  //Test
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?q=something&key=YOUR_API_KEY&fields=items(id,snippet(title,thumbnails(default))&part=snippet"

  var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&limit=3&order=relevance&type=video&videoEmbeddable=true&key=AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM";

  
  // Ashley's API - AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM


  // Creating AJAX Call
  $.ajax({
      url: youtubeURL,
      method: "GET",
      data: {
        q: celebrity
      }
    }).then(function(response) {
      console.log(response)
            
    

      for (var i = 0; i < response.items.length; i++) {

      // Container for videos
      var vidDiv = $("<div>");

      // Gathering video info
      var vidTitle = $("<h3>").text(response.items[i].snippet.title);
      var vidDesc = $("<p>").text(response.items[i].snippet.description);
      var vidId = response.items[i].id.videoId;
      var vidThumbnail = response.items[i].snippet.thumbnails.high.url;

      var videoPlayer = $('<iframe />', {
        type: 'video/mp4',
        controls: true,
        poster: vidThumbnail,
        height: 300,
        width: 400
      });

      videoPlayer.attr('src', 'https://www.youtube.com/embed/' + vidId);
     

      vidDiv.append(videoPlayer)
      vidDiv.append(vidTitle)
      vidDiv.append(vidDesc)

      $("#youtube").append(vidDiv)

      // vidDiv.empty();
      // var videoPlayer = $("<video>");
      // videoPlayer.attr('src', "'https://www.youtube.com/embed/" + vidId + "'");
      // videoPlayer.attr('type', "video");
      // videoPlayer.attr('width', 320);
      // videoPlayer.attr('height', 240);
    

      }
    });
  }

$("#youtube").empty()

