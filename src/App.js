import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Components/Header';
import Home from './Components/Home.js';
import About from './Components/About';
import {Route, BrowserRouter as Router,Switch ,Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='Header'></div>
      <Link to="/menu"><Home/></Link>
      <Link to="/home">Home</Link>
     <Switch>
       <Route path='/menu'>
         <Header/>
       </Route>
       <Route path='/home'>
         <About/>
       </Route>
     </Switch>
    </Router>
   
   
  );
}

export default App;
