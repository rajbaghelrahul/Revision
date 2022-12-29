import { INCREAMENT, DECREAMENT } from "./action.type";

// const initData = {
//     id: 1,
//     name: "Raj Baghel",
//     age: 22,
//     count: 0,
//     todo: []
// };

// function reducer(data=initData, action) {
//     switch(action.type) {
//         case INCREAMENT: {
//             return {...data,  count:data.count + action.payload};
//         }
//         case DECREAMENT: {
//             return {...data,  count:data.count + action.payload};
//         }
//         default: {
//             return data;
//         }
//     }
// }

// export default reducer;

const initData = {
    count : 0,
    todos : []
}

function reducer(state = initData, action) {
    switch(action.type) {
        case INCREAMENT: {
            return {...state, count:state.count + action.payload };
        }
        case DECREAMENT: {
            return {...state, count:state.count - action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;