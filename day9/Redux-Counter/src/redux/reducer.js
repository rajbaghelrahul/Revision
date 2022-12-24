import { INCREASE, DECREASE } from "./action.type";

const initState = {
    count : 0,
    todos : []
}

function reducer(state = initState, action) {
    switch(action.type) {
        case INCREASE: {
            return {...state, count:state.count + action.payload };
        }
        case DECREASE: {
            return {...state, count:state.count - action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;




// import { INCREMENT, DECREMENT } from "./action.type";

// const initState = {
//   count: 1,
//   todos: []
// };

// function reducer(state = initState, action) {
//   switch (action.type) {
//     case INCREMENT: {
//       return { ...state, count: state.count + action.payload };
//     }
//     case DECREMENT: {
//       return { ...state, count: state.count - action.payload };
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export default reducer;
