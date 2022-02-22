// import logo from './logo.svg'; 
import './App.css';
// import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import React ,{useState} from 'react';
import Alearts from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  // alerts settings 
  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
      })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }
  // light mode and dark mode enabling 
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enaled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enaled","success");
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alearts alert={alert}/>
        <div className="container my-3">
        {/* <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/"> */}
              <TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert}/> 
              {/* </Route>
          </Switch> */}
          </div>
      {/* </Router>  */}
     </>
  )
}

export default App;
