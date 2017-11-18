var path = require("path");

module.exports = function(app) {

// Route home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

// Route to survey page
  app.get("/survey", function(res, req) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
