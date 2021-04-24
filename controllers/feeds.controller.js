const axios = require("axios");

exports.getFeeds = (req, res) => {
  const tags = req.query.tags;
  
  axios
    .get(
      `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${tags}`
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
};
