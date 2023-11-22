
import Navbar from './Navbar';
import Person from './Person';
import { Routes, Route } from "react-router-dom";
import Usersend from './Usersend';
import Home from './Home';
import Location from './location';
import Sendlocation from './Sendlocation';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="personlist" element={<Person/>}/>
          <Route path="sendperson" element={<Usersend/>}/>
          <Route path="locationlist" element={<Location/>}/>
          <Route path="sendlocation" element={<Sendlocation/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
