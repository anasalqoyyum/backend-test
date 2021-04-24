require("dotenv").config();

const { FLICKR_KEY, FLICKR_SECRET } = process.env;

export const config = {
  flickr: {
    request_url: "https://www.flickr.com/services/oauth/request_token",
    authorize_url: "https://www.flickr.com/services/oauth/authorize",
    access_url: "https://www.flickr.com/services/oauth/access_token",
    oauth: 1,
    custom_parameters: ["perms"],
    consumer_key: FLICKR_KEY,
    consumer_secret: FLICKR_SECRET,
    scope: ["read"],
  },
};
