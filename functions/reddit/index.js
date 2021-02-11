require("dotenv").config();
const functions = require("firebase-functions");

exports.onNewSeed = functions.firestore
  .document("seeds")
  .onWrite((change, context) => {
    // interact with reddit
  });
