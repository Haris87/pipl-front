const functions = require("firebase-functions");
const _request = require("request");
const cors = require("cors")({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response
      .contentType("application/json")
      .send({ message: "Hello from Firebase!" });
  });
});

exports.piplSearch = functions.https.onRequest((req, res) => {
  console.log(JSON.stringify(req.query, null, 2));

  _request.get("https://api.pipl.com/search/", { qs: req.query }, function(
    error,
    _response,
    body
  ) {
    if (!error) {
      cors(req, res, () => {
        res
          .status(_response.statusCode)
          .contentType("application/json")
          .send(body);
      });
    } else {
      cors(req, res, () => {
        res
          .status(_response.statusCode)
          .contentType("application/json")
          .send(error);
      });
    }
  });
});
