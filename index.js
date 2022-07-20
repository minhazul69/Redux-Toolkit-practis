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

// INITIAL STATE
const initialState = {
  user: ["Akib"],
  count: 1,
};

// VARIABLE
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_COUNTER_BY_PAYLOAD = "ADD_COUNTER_BY_PAYLOAD";
const ADD_USER = "ADD_USER";

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
const addCounterByPayload = (number) => {
  return {
    type: ADD_COUNTER_BY_PAYLOAD,
    payload: number,
  };
};
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// REDUCER COUNTER
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
    case ADD_COUNTER_BY_PAYLOAD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(addCounterByPayload(10));
// store.dispatch(addCounterByPayload(5));
// store.dispatch(addCounterByPayload(15));
store.dispatch(addUser("sakib"));
store.dispatch(addUser("Tasib"));
