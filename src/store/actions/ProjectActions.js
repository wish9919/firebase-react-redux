export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const d = new Date();
    const time = new Date().toLocaleTimeString();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Wishvantha",
        authorLasttName: "Perera",
        authorId: 12345,
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
