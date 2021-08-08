import axios from 'axios';

// export const axiosD = axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// }); 

axios.defaults.baseURL="http://jsonplaceholder.typicode.com/";

export async function fetchWeather(){
  const {data} = await axios.get("/posts");
  console.log(data)
return data
}