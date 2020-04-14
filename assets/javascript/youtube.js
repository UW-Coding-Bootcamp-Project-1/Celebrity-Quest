$(document).ready(function() {

// Storing YouTube API key & URL
function videos() {
  var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q="  + actor + "&limit=3&key=AIzaSyC5T7Hpx41SCvhtbhlbfNIuSDq97B-TrhM";

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
      var vidView = response.items[i].snippet.thumbnails.default.url;
      var vidHeight = response.items[i].snippet.thumbnails.default.height;
      var vidWidth = response.items[i].snippet.thumbnails.default.width;
      var vidTitle = response.items[i].snippet.title;
      var showVid = $("<video>");
      var showTitle = $("<p>").text(vidTitle);

      showVid.attr("src", vidView);
      showTitle.attr("title", vidTitle);

      console.log("Video:", vidView, vidHeight, vidWidth);
      console.log("Title:", vidTitle);

      vidDiv.append(showTitle);
      vidDiv.append(showVid);
    }
    
    
        function userInput() {
          var addInput = $("#search").val().trim();
          celebrity.push(addInput);
          console.log("Celebrity:", celebrity)
        }

        userInput();

    });
    
}

videos();

});

var topic = $(this).attr("data-name");
var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="  + topic + "&key=AIzaSyBvDT6JrY1UC0jumUEXSLLw-97HjDh5nb4";

// Creating AJAX Call
$.ajax({
    url: youtubeURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

  })

