import reducer from "./reducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(reducer);

store.subscribe(() => {
  console.log("store got updated", store.getState());
});