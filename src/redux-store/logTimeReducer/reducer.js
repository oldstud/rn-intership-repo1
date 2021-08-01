

const initialState = {
    testCount:2
};

const reducer = (state = initialState, action)=>{
switch (action.type) {
    case "TEST_TYPE":
        return{
            ...state,
            testCount : state.testCount + 1
        }
        

        default: return state
}
};

export default reducer