import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface CustomInputProps {
    changeState(itemValue: string, itemkey: number | string): void,
    type: string 
}


export const CustomInput: React.FC<CustomInputProps> = props  => {
const{ type, changeState } = props;

const [itemData,setItemData] = useState<string>('');
 
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setItemData(event.target.value);

    if(itemData.trim()) {
    changeState(itemData,type);
    }

}

const gState = useSelector(state => state.logtime );

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
