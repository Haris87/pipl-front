const functions = require("firebase-functions");
const request = require("request");
const cors = require("cors")({ origin: true });

const PIPL_URL = "https://api.pipl.com/search/";
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
  cors(req, res, () => {
    console.log(JSON.stringify(req.query, null, 2));

    request.get(PIPL_URL, { qs: req.query }, (error, response, body) => {
      if (!error) {
        res
          .status(response.statusCode)
          .contentType("application/json")
          .send(body);
      } else {
        res
          .status(response.statusCode)
          .contentType("application/json")
          .send(error);
      }
    });
  });
});
