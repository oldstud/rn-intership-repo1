import { useState } from "react";

import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput"

export const TimeTracking = ()=> {
    
const [state, setState] = useState({date:"",text:"",time:""});

const combineDataToState = (itemValue,itemkey)=> {
    setState({...state, [itemkey] : itemValue});
    console.log(itemkey)
};
const show =()=>{
    console.log(state)
};
    return (
        <div>
            <CustomInput type="date" changeState={combineDataToState}/>
            <CustomInput type="text" changeState={combineDataToState}/>
            <CustomInput type="time" changeState={combineDataToState}/>
            <CustomButton trigger={show}/>

        </div>
    )
}