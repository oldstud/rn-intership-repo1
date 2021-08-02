

const initialState = [
    {
        id:0,
        date:"",
        body:"",
        time:""
    },
];

const reducer = (state = initialState, action)=>{
switch (action.type) {
    case "DATE_TYPE":
        return[
            ...state,
            {
                id : state.id + 1,
                date:"",
                body:"",
                time:""
            },
        ]
    case "BODY_DATA":
        return{
            ...state,
            testCount : state.testCount + 1
        }
    case "TIME_DATA":
        return{
            ...state,
            testCount : state.testCount + 1
        }
        

        default: return state
}
};

export default reducer