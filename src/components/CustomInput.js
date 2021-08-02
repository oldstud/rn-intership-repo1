import { useState } from "react";

export const CustomInput = (props)=>{
const{ type, changeState } = props;

const [itemData,setItemData] = useState('');

const onChange = (event) => {
    setItemData(event.target.value);
    if(itemData.trim()){
        
        
    changeState(itemData,type);
    }
}



    return (
        <>
        <input
        type={type} 
        value={itemData || ''} 
        onChange={(event)=> onChange(event) }
        />
        </>
    )
}
