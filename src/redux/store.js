import { legacy_createStore as createStore } from "redux";
import InventoryReducer from "./inventory/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(InventoryReducer, composeWithDevTools());

export default store;
