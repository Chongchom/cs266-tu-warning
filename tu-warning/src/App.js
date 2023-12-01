
import Navbar from './Navbar';
import Person from './Person';
import { Routes, Route } from "react-router-dom";
import Usersend from './Usersend';
import Home from './Home';
import Location from './location';
import Sendlocation from './Sendlocation';
import Login from './Login';
import User from './User';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="personlist" element={<Person/>}/>
          <Route path="sendperson" element={<Usersend/>}/>
          <Route path="locationlist" element={<Location/>}/>
          <Route path="sendlocation" element={<Sendlocation/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
