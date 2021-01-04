import { firebase } from "firebase";
import { firebaseConfig } from "../config";

export const saveSeed = (postUrl, userName, amount) => {
  console.log("in save seed");
  try {
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();

    const docRef = firestore.doc("seeds/seedData");
    docRef.set({
      postUrl,
      userName,
      amount,
      planted: false,
    });
  } catch (ex) {
    console.error(`error saving to firestore - ${ex}`);
    return false;
  }
  return true;
};
