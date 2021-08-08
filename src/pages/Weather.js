// import {axiosD} from "../api"
import { useEffect,useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import * as operationsWeather from "../redux-store/weatherThunkReducer/operationsWeather"



export const Weather = () => {
// const [state, setstate] = useState([])
const dispatch = useDispatch();

    useEffect(() => {
//   axiosD.get(`posts/5`)
//   .then(res=>{
//       let data = res.data;
//    setstate(state=>[...state,data])
//   })    
dispatch(operationsWeather.fetchWeather())
    },[dispatch])

    const weatherData = useSelector(state=>state.weather.reducerWeather)

const weatherStyle = {
    
    list: {position:"absolute",bottom:0,height:"300px",width:"200px",overflowX:"scroll"}               
};

if(weatherData.length>1){
return(
    <div>
        <div style={weatherStyle.list}>
            <p>WEATHER:</p>
{weatherData.map((item,key)=>(
 
    <p key={key}><b>{key+1}</b>{item.title}-------{item.body}</p>
))}
</div>
    </div>
)
}else{
    return(
    <button onClick={()=>
        // console.log(state)
        console.log("aaaaaa")
    }
        >bad request</button>
    )
}
}