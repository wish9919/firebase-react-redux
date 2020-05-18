export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //make async call to database
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    const d = new Date();
    const time = new Date().toLocaleTimeString();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: `${mo} ${da} ${ye}, ${time}`,
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
