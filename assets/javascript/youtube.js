$(document).ready(function() {

// Storing YouTube API key & URL
function videos() {
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="  + actor + "&limit=3&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

  // My API Key - AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4

  //Test
  // var youtubeURL = "https://www.googleapis.com/youtube/v3/search?q=something&key=YOUR_API_KEY&fields=items(id,snippet(title,thumbnails(default))&part=snippet"

  var youtubeURL = "https://www.googleapis.com/youtube/v3/search?q=something&key=AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM&fields=items(id,snippet(title,thumbnails))&part=snippet"

  // Ashley's API - AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM



  // Creating AJAX Call
  $.ajax({
      url: youtubeURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      
      var result = response.items;

    for (var i = 0; i < result.length; i++) {
      

      // Gathering video info
      var vidDiv = $("#youtube")
      var vidThumb = response.items[i].snippet.thumbnails.default;
      var vidTitle = response.items[i].snippet.title;
      var vidId = response.items[i].id.videoId;
      var showVid = $("<video>");
      var showTitle = $("<p>").text(vidTitle);

      showVid.attr("src", vidView);
      showTitle.attr("title", vidTitle);

      
      console.log("Title:", vidTitle);
      console.log("Video:", vidThumb);

      // Try incorporating the video to play on the page instead of thumbnail

      vidDiv.append(showTitle);
      vidDiv.append(showVid);
    }
    
    
        // function userInput() {
        //   var addInput = $("#search").val().trim();
        //   celebrity.push(addInput);
        //   console.log("Celebrity:", celebrity)
        // }

        // userInput();

    });
    
}

videos();

});
