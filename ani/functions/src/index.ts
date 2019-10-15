import * as functions from "firebase-functions";
const BigQuery = require("@google-cloud/bigquery");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const getReportData = functions.https.onRequest((req, res) => {
  const bigquery = new BigQuery({
    projectId: "anii-420"
  });
  const query = `SELECT * FROM \`anii-420.aniitest.testtest\``;
  bigquery
    .query({
      query: query,
      location: "australia-southeast1",
      useLegacySql: false
    })
    .then(function() {
      return res.status(200).send("hello");
    })
    .catch(function(error) {
      return res.status(500).json(error);
    });
});
