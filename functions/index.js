const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("Notification Added!", doc));
};

exports.todoCreated = functions.firestore
  .document("todos/{todo}")
  .onCreate((doc) => {
    const todo = doc.data();
    const notification = {
      content: "Added a new TODO",
      user: `${todo.authorFirstName} ${todo.authorLastName}`,
      userId: `${todo.authorId}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.todoDeleted = functions.firestore
  .document("todos/{todo}")
  .onDelete((doc) => {
    const todo = doc.data();
    const notification = {
      content: "Deleted a TODO",
      user: `${todo.authorFirstName} ${todo.authorLastName}`,
      userId: `${todo.authorId}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });
