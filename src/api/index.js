import firebase from "firebase";
import { firebaseConfig } from "../config";

export const saveSeed = (postUrl, userName, amount) => {
  console.log("in save seed");
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const firestore = firebase.firestore();

  console.log("run it");
  return firestore
    .collection("seeds")
    .add({
      postUrl,
      userName,
      amount,
      planted: false,
      commented: false,
    })
    .then((docRef) => console.log("apparently it worked ", docRef))
    .catch((ex) => {
      console.log(`something bad happened - ${ex}`);
    });
};
