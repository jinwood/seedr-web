const snoowrap = require("snoowrap");

const BASE_URL = "https://www.reddit.com/";
console.log("env", process.env.REDDIT_CLIENT_ID);
const r = new snoowrap({
  userAgent: process.env.REDDIT_USER_AGENT,
  clientId: process.env.REDDIT_CLIENT_ID,
  clientSecret: process.env.REDDIT_CLIENT_SECRET,
  username: process.env.REDDIT_USERNAME,
  password: process.env.REDDIT_PASSWORD,
});

module.exports.extractSubreddit = (url) => {
  return String.split("/r/", url)[1].split("/");
};

module.exports.makeComment = (url) => {};
