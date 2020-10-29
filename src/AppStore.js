import { createStore } from "redux";
import accountOperations from "./reducer/AccountReducer";
const store = createStore(accountOperations,
  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
