// SIMPLE REDUX TOOLKIT
// 1. state - count: 0
// 2. action - increment, decrement. reset
// 3. reducer
// 4. store

const { createStore } = require("redux");

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

// DECLARE INITIAL STATE
const initialState = {
  count: 0,
};
// VARIABLE
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// ACTION
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

// CREATE REDUCER
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
