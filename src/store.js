// eslint-disable-next-line no-unused-vars
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./reducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, UserReducer);
// export default createStore(
//   UserReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

let store = createStore(
  persistedReducer,
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
);

let persistor = persistStore(store);
export { store, persistor };
