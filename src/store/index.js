
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers imported
import {supportChatsReducer} from "./supportChats/reducers";

const rootReducer = combineReducers({
  supportChats: supportChatsReducer,
});

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
