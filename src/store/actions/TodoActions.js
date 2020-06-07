export const createTodo = (todo) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //make async call to database
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("todos")
      .add({
        ...todo,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_TODO", todo });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_TODO_ERROR", err });
      });
  };
};
