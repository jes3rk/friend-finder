var friendData = require("../data/friends.js");
var output;


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(output);
  });

  app.post("/api/friends", function(req, res) {

    var survey = req.body;
    // output = friendData;
    var comp = [];

    for (var i = 0; i < friendData.length; i++) {
      var diff = 0;
      for (var j = 0; j < friendData[i].scores.length; j++) {
        // Diff is the sum of the absolute values of the differences in each score
        diff += Math.abs(survey.scores[j] - friendData[i].scores[j]);
      };
      comp.push(diff);
    };
    var min = Math.min(comp);
    var indexMin = comp.indexOf(min);
    output = friendData[indexMin];
    friendData.push(survey);
    // output = friendData;
  });
};
