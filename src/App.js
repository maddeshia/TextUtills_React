// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
 
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,                                 
  Route,
} from "react-router-dom";


 
function App() {
  const [mode , setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const togglemode =()=>{
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enable", "success")
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
     showAlert("Light Mode is enable", "success")
    }
  }
  return (
     <>
      {/* <Navbar tittle="text-Utils"  homeText="Home"  />  */}
      {/* <Navbar />  */}
      


      <Router> 
        <Navbar tittle="text-Utils"   mode={mode} toggle={togglemode} /> 
         
        <Alert  alert={alert}/>

        <div className='container my-3'>
            <Routes>
              <Route exact path="/home" element={<Textform  showAlert={showAlert} heading = "Enter the text to analyzer" mode={mode}/>}/>
              <Route exact path="/about" element={<About mode={mode} />} />
            </Routes>
          </div>
      </Router>
      
      
      
     </>
  );
}

export default App;
