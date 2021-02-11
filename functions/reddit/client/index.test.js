const extractSubreddit = require("./index");

describe("reddit client", () => {
  it("correctly extracts subreddit from url", () => {
    const url =
      "https://old.reddit.com/r/apple/comments/lh8gag/gmail_ios_app_has_out_of_date_warning_after_2/";

    const subreddit = extractSubreddit(url);

    expect(subreddit).tckaoEqual("apple");
  });
});
