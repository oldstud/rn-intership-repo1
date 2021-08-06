import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CustomInput = (props)=>{
const{ type, changeState } = props;

const [itemData,setItemData] = useState('');

const onChange = (event) => {
    setItemData(event.target.value);
    if(itemData.trim()){
    changeState(itemData,type);
    }
}
const gState = useSelector(state => state.reducer);
useEffect(()=>{
    
        setItemData("")
    
   
},[gState])


    return (
        <>
        <input
        type={type} 
        value={itemData} 
        onChange={(event)=> onChange(event) }
        />
        </>
    )
}
