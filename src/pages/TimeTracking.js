import { useState } from "react";
import { useDispatch } from "react-redux";

// import {logTimeActions} from "../redux-store/logTimeReducer/actions"
import {dataAction} from "../redux-store/logTimeReducer/actions"


import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput"
import { List } from "../components/List";


export const TimeTracking = ()=> {
const initialLocalState = {date:"", text:"", time:""};
const [state, setState] = useState(initialLocalState);

const dispatch = useDispatch();

const combineDataToState = (itemValue,itemkey)=> {
    setState({...state, [itemkey] : itemValue});
};

    const handlerButton = () => {
        console.log(state)
        // dispatch(logTimeActions.dataAction(state))
        dispatch(dataAction(state));
        setState(initialLocalState);
    };


    return (
        <div>

            <CustomInput type="date" changeState={combineDataToState}/>
            <CustomInput type="text" changeState={combineDataToState}/>
            <CustomInput type="time" changeState={combineDataToState}/>

            <CustomButton trigger={handlerButton}/>
            <List/>
        </div>
    )
}