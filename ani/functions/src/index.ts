import * as functions from "firebase-functions";
const BigQuery = require("@google-cloud/bigquery");
const cors = require("cors")({ origin: true });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.json("Hello from Firebase!");
  });
});

export const getReportData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
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
      .then(function(results) {
        const rows = results[0];
        return response.status(200).json(rows);
      })
      .catch(function(error) {
        return response.status(500).json(error);
      });
  });
});
