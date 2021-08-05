import { useState } from "react";
import { useDispatch } from "react-redux";

import {logTimeActions} from "../redux-store/logTimeReducer/actions"

import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput"
import { List } from "../components/List";


export const TimeTracking = ()=> {

const [state, setState] = useState({date:"", text:"", time:""});

const dispatch = useDispatch();

const combineDataToState = (itemValue,itemkey)=> {
    setState({...state, [itemkey] : itemValue});
};



    const show =()=>{
        console.log(state)
        dispatch(logTimeActions.dataAction(state))
    };


    return (
        <div>
            <CustomInput type="date" changeState={combineDataToState}/>
            <CustomInput type="text" changeState={combineDataToState}/>
            <CustomInput type="time" changeState={combineDataToState}/>
            <CustomButton trigger={show}/>
            <br></br>
            <List/>

       
        </div>
    )
}