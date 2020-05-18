const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login Success!");

      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout Success!");
      return;

    case "SIGNUP_SUCCESS":
      console.log("signup success!");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup failed");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
