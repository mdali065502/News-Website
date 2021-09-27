import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';
import{
  BrowserRouter as Router,
  Switch,
  Route,
   
}from "react-router-dom";


function App() {

  return (
    <>
     <Router>
   
  
       <Navbar />
    <div className="container my-3">
      <News/>
       
    </div>
    <Switch>
      <Route  path="/about">
         <About />
      </Route>
     
      </Switch>
    
     </Router>
  
    </> 
  );
}

export default App;
