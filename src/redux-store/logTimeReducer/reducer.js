import { createReducer } from "@reduxjs/toolkit";

import {dataAction} from './actions'





const reducer = createReducer([],{
    [dataAction]:(state,action)=>[...state,action.payload]
})


// vanilla REDUCER
// const initialState = [];

// const reducer = (state = initialState, action)=>{
// switch (action.type) {
//     case 'LIST_DATA':
//         return [
//             ...state,
//              action.payload
//         ]

//         default: return state
// }
// };

  
export default reducer

