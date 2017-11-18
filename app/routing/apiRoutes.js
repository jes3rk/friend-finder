var friendData = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(res, req) {
    res.json(friendData);
  });

  app.post("/api/friends", function(res, req) {
    // Insert logic in here
  });
};
