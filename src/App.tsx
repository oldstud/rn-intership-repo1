import { TimeTracking } from "./pages/TimeTracking";
import { Weather } from "./pages/Weather";


const App: React.FC =()=> {
  return (
    <div className="App">

    <TimeTracking/>
    <Weather></Weather>
    
    </div>
  );
}

export default App;
