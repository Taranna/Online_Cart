import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;











// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// //Import Reducers
// import { cartReducers } from "./reducers/cartReducers";
// import {
//   getProductsReducer,
//   getProductsDetailsReducer,
// } from "./reducers/productReducers";
// const reducer = combineReducers({
//   cart: cartReducers,
//   getProducts: getProductsReducer,
//   getDetails: getProductsDetailsReducer,
// });

// const middleware = [thunk]; //helps to make asynchronous requests in actions

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;
