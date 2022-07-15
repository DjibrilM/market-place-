import logo from './logo.svg';
import classes from "./components/pages/Home/Home"
import './App.css';
import { Route,Routes,Navigate, useNavigate } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import { useEffect } from 'react';




function App() {

 const navigate = useNavigate()
 const check = true;

 useEffect(()=>{
  if(check){
    navigate('/home',{replace:true})
  }
 },[])

  return (
    <div className="App">
     <Routes >
        <Route path='/home' element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
