import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './component/Navigation/Navigation';
import Login from './component/Login/Login';
import Uregistration from './component/Uregistration/Uregistration';
import Aregistration from './component/Aregistration/Aregistration';
import Unavigation from './component/Unavigation/Unavigation';


import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
          
              <Route path="/Login" element={<Login />}/>
              <Route path="/UserRegistration" element={<Uregistration />}/>
              <Route path="/AdminRegistration" element={<Aregistration />}/>
              
           </Routes>
        </BrowserRouter>
        
    </div>
  );
}

function App1() {
  return (
    <div className="App1">
        <BrowserRouter>
        <Unavigation />
          <Routes>
          
              
              <Route path="/Unavigation" element={<Unavigation />} />

           </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App1;
