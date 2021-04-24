module.exports = (app) => {
  const feeds = require("../controllers/feeds.controller");

  app.get("/feeds", feeds.getFeeds);
};
