// import { persistReducer, persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./ducks";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";

const persistConfig = {
  key: "univa",
  storage,
};

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composer(applyMiddleware(routerMiddleware()))
);

// const persistor = persistStore(store);
// export { persistor, store };
export { store };
