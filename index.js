// SIMPLE REDUX TOOLKIT
// 1. state - count: 0
// 2. action - increment, decrement. reset
// 3. reducer
// 4. store

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// const { createStore } = require("redux");

// const { createStore } = require("redux");

// // INITIAL STATE
// const initialState = {
//   count: 0,
// };
// // VARIABLE
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";

// // ACTION
// const incrementAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetAction = () => {
//   return {
//     type: RESET,
//   };
// };
// // CREATING REDUCER
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };

//     default:
//       state;
//   }
// };
// // STORE
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());

// INITIAL STATE
// const initialState = {
//   user: ["Akib"],
//   count: 1,
// };

// // VARIABLE
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const ADD_COUNTER_BY_PAYLOAD = "ADD_COUNTER_BY_PAYLOAD";
// const ADD_USER = "ADD_USER";

// // ACTION
// const incrementAction = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// const decrementAction = () => {
//   return {
//     type: DECREMENT,
//   };
// };
// const resetAction = () => {
//   return {
//     type: RESET,
//   };
// };
// const addCounterByPayload = (number) => {
//   return {
//     type: ADD_COUNTER_BY_PAYLOAD,
//     payload: number,
//   };
// };
// const addUser = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

// // REDUCER COUNTER
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0,
//       };
//     case ADD_COUNTER_BY_PAYLOAD:
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case ADD_USER:
//       return {
//         user: [...state.user, action.payload],
//         count: state.count + 1,
//       };

//     default:
//       state;
//   }
// };

// const store = createStore(counterReducer);
// store.subscribe(() => console.log(store.getState()));
// // store.dispatch(incrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(incrementAction());
// // store.dispatch(decrementAction());
// // store.dispatch(resetAction());
// // store.dispatch(addCounterByPayload(10));
// // store.dispatch(addCounterByPayload(5));
// // store.dispatch(addCounterByPayload(15));
// store.dispatch(addUser("sakib"));
// store.dispatch(addUser("Tasib"));

// AGAIN PRACTICE REDUX AND COMBINEREDUCERS
// MANAGE PRODUCT
// INITIAL PRODUCT STATE
const initialProductState = {
  product: ["salt", "sugar"],
  count: 2,
};
// PRODUCT VARIABLE
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
// PRODUCT ACTION
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};
const addProduct = (productCountNumber) => {
  return {
    type: ADD_PRODUCT,
    payload: productCountNumber,
  };
};
// PRODUCT REDUCER
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};
// // CREATE STORE
// const store = createStore(productReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(getProduct());
// store.dispatch(addProduct("onion"));
// store.dispatch(addProduct("rice"));

// MANAGE CART
// INITIAL CART STATE
const initialCartState = {
  cart: ["salt"],
  count: 1,
};
// CART VARIABLE
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
// CART ACTION
const getCart = () => {
  return {
    type: GET_CART,
  };
};
const addCart = (cartCountNumber) => {
  return {
    type: ADD_CART,
    payload: cartCountNumber,
  };
};
// CART REDUCER
// REDUX TOOLKIT USE
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        count: state.count + 5,
      };

    default:
      return state;
  }
};
// ADD MULTI REDUCER
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});
// CREATE STORE
// USE MIDDLEWARE
// USE REDUX LOGGER MIDDLEWARE
const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProduct());
store.dispatch(addProduct("onion"));
// store.dispatch(addProduct("rice"));

// store.dispatch(getCart());
// store.dispatch(addCart("rice"));
// store.dispatch(addCart("onion"));
