import { INCREASE, DECREASE } from "./action.type";

export const increase = (data) => ({
    type: INCREASE,
    payload: data
});

export const decrease = (data) => ({
    type: DECREASE,
    payload: data
});


// import { INCREMENT, DECREMENT } from "./action.type";

// export const increment = (data) => ({
//   type: INCREMENT,
//   payload: data
// });

// export const decrement = (data) => ({
//   type: DECREMENT,
//   payload: data
// });

// // dispatch(action)
// // --> reducer( state, action )
// // --> reducer returns a new value
// // --> that becomes updated state
