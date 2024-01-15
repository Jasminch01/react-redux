import { createStore } from "redux";
import counterReducer from "./services/counterReducer/counterResucer";

const store = createStore(counterReducer)
export default store;