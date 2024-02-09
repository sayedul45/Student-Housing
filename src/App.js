
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Fees from './pages/Fees';
import Apply from './pages/Apply';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Bsmrh from './components/Bsmrh';
import Ddh from './components/Ddh';
import Knih from './components/knih';
import Shh from './components/Shh';
import Nfch from './components/Nfch';
import CampusArea from './components/CampusArea';
import InsideCity from './components/InsideCity';
import Rooms from './pages/Rooms';
import OfferDetails from './components/OfferDetails';
import { useEffect, useState } from 'react';

function App() {
//  const [backendData, setBackendData] = useState([{}])
//  useEffect(()=>{
//   fetch("/api").then(
//     respose =>Response.json()
//   ).then(data =>{
//     setBackendData(data)
//   })
//  },[])
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/rooms" element={<Rooms/>}/>
     <Route path="/fees" element={<Fees/>}/>
     <Route path="/apply-now" element={<Apply/>}/>
     <Route path='/signin' element={<Login/>}/>
     <Route path='/sign-up' element={<Signup/>}/>
     <Route path='/rooms/bsmrh' element={<Bsmrh/>}/>
     <Route path='/rooms/ddh' element={<Ddh/>}/>
     <Route path='/rooms/knih' element={<Knih/>}/>
     <Route path='/rooms/shh' element={<Shh/>}/>
     <Route path='/rooms/nfch' element={<Nfch/>}/> 
     <Route path='/rooms/ca' element={<CampusArea/>}/>
     <Route path='/rooms/ic' element={<InsideCity/>}/> 
     <Route path="/offer/:id" element={<OfferDetails/>} />
    </Routes>
    </>
  );
}

export default App;
