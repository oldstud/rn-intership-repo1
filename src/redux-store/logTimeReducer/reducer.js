import {logTimeActions} from "./actions"
const {dataItem} = logTimeActions;
const initialState = {};

const reducer = (state = initialState, action)=>{
switch (action.type) {
    case 'LIST_DATA':
        return{
            ...state,
             dataItem
        }
        

        default: return state
}
};

export default reducer