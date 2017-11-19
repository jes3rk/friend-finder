var friendData = require("../data/friends.js");
var output;


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(output);
  });

  app.post("/api/friends", function(req, res) {

    var survey = req.body;
    var surveyScores = req.body["scores[]"];
    var comp = [];

    for (var i = 0; i < friendData.length; i++) {
      for (var j = 0; j <= 10; j++) {
        var diff = Math.abs(surveyScores[j] - friendData[i].scores[j]);
        comp.push(diff);
      };
    };
    output = survey;

    var minIndex = comp.indexOf(Math.min(comp));
    output = friendData[minIndex];
    friendData.push(survey);
  });
};
