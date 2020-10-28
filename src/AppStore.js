import { createStore } from "redux";
import accountOperations from "./reducer/AccountReducer";
const store = createStore(accountOperations);

export default store;
