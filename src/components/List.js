import { useSelector } from "react-redux"


export const List =()=> {
const todos  = useSelector(state=>state);
if(todos){
const listMap = todos.map((item,key)=>
<li className={"todo"-key}><i>{item.date}</i><b>{item.text}</b><span>{item.time}</span></li>);
}
 return (
     
    <ul>
        
   {listMap}
    </ul>
    
 )
     

}