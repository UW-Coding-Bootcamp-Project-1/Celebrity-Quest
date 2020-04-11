// this file holds the Giphy API code 

var topic = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=a4LGOXb9Mib8LjW2K5iuZwlrktAX8mI2&limit=5";

