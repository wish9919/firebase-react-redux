import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import firebaseConfig from "./config/firebase";

const middleware = [thunk.withExtraArgument({ getFirestore })];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), reduxFirestore(firebaseConfig))
);

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebaseConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
      config={{ userProfile: "users" }}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
