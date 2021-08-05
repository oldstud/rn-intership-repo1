
import { useEffect } from "react"
import { useSelector } from "react-redux"

export const List =()=>{
    const stateList = useSelector(state => state.reducer)
    useEffect(() => {
        setTimeout(console.log(stateList),500)
   
    }, [stateList]) 
   if(stateList){ 

       return(<ul>{stateList.map((item,key)=><li className={`field-${key+1}`}><i>{item.date}</i><b>{item.text}</b><i>{item.time}</i></li>)}</ul>) 
}else{
     return (<div>Nothing</div>)
}

}