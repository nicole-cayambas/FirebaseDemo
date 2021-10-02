
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld =
functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("My favorite emoji is \u{1F43C}");
});

exports.addUserToFirestore = functions.auth.user().onCreate((user) => {
// This code runs everytime a new user is created
  const usersRef = admin.firestore().collection("users");
  return usersRef.doc(user.uid).set({
    displayName: user.displayName,
    emojis: "\u{263A}\u{1F917}\u{1F92B}",
  });
});
