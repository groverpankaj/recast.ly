var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(input) {
      callback(input.items);
    },
    error: function(response) {
      console.log('failed');
    },
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      // videoEmbeddable: true,
    }
  });
};

export default searchYouTube;

// console.log('we changed the searchYouTube file');