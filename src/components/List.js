import { useSelector } from "react-redux"
export const List =()=> {
    const fields = useSelector(state => state.fields)
    return (
        <ul>
            
        {
        
        Object.keys(fields).map((item,key)=>(
            <li>{key}{item[1]}</li>
        ))
    }
        </ul>
    )
}