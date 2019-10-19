import * as functions from "firebase-functions";
const BigQuery = require("@google-cloud/bigquery");
const cors = require("cors")({ origin: true });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.json("Hello from Firebase!");
  });
});

//get every data in testest table
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

//get frequency of each genre
export const getGenreFreq = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT genres, count(*) as g_freg FROM \`anii-420.aniitest.anime\` GROUP BY genres`;
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

//get genre average score
export const getGenreAvgScore = functions.https.onRequest(
  (request, response) => {
    cors(request, response, () => {
      const bigquery = new BigQuery({
        projectId: "anii-420"
      });
      const query = `SELECT genres, count(*) as g_freg, ROUND(AVG(averageScore)) as asScore FROM \`anii-420.aniitest.anime\` GROUP BY genres
      ORDER BY asScore DESC`;
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
  }
);

//get the top ten anime by average score
export const getTopTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore FROM \`anii-420.aniitest.anime\` GROUP BY title, averageScore
    ORDER BY averageScore DESC
    LIMIT 10`;
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

//get top ten drama
export const getDramaTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Drama" GROUP BY title, averageScore, genres
    ORDER BY averageScore DESC
    LIMIT 10`;
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

//get top ten adventure
export const getAdventureTen = functions.https.onRequest(
  (request, response) => {
    cors(request, response, () => {
      const bigquery = new BigQuery({
        projectId: "anii-420"
      });
      const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Adventure" GROUP BY title, averageScore, genres
    ORDER BY averageScore DESC
    LIMIT 10`;
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
  }
);

//get top ten action
export const getActionTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Action" GROUP BY title, averageScore, genres
  ORDER BY averageScore DESC
  LIMIT 10`;
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

//get top ten comedy
export const getComedyTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Comedy" GROUP BY title, averageScore, genres
  ORDER BY averageScore DESC
  LIMIT 10`;
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

//get top ten fantasy
export const getFantasyTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Fantasy" GROUP BY title, averageScore, genres
  ORDER BY averageScore DESC
  LIMIT 10`;
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

//get top ten romance
export const getRomanceTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Romance" GROUP BY title, averageScore, genres
  ORDER BY averageScore DESC
  LIMIT 10`;
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

//get top ten sports
export const getSportsTen = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const bigquery = new BigQuery({
      projectId: "anii-420"
    });
    const query = `SELECT title, averageScore, genres FROM \`anii-420.aniitest.anime\` WHERE genres LIKE "%Sports" GROUP BY title, averageScore, genres
  ORDER BY averageScore DESC
  LIMIT 10`;
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
