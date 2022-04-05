import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Components/Header.js';

function App() {
  return (
   <div className='Header'>
    <Header/>
  <div className="container">
    <div className="row">   <div className="col-3 col-centered">
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div></div></div>
  </div>
 
    
   </div>
  );
}

export default App;
