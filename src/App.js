import UserArea from "./UserArea";
import { BrowserRouter as Router, } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
       <UserArea/>
       </Router>
     
    </div>
  );
}

export default App;
