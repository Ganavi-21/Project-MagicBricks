import './App.css';
import Home from './screens/home';
import View from './screens/viewscreen';
import Login from './screens/logpage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import UserSignup from './screens/userSignup';


function App() {
  return (
    <Router>
    <Routes>
     <Route path='/'>
    <Route index element={<Home/>}/>
     <Route path="/View" element={<View/>}/>
     <Route path='/details' element={<Home/>}/>
     <Route path='/Log' element={<Login/>}/>
     <Route path='/Signup' element={<UserSignup/>}/>
     </Route>
 </Routes>
 </Router>
  );
}

export default App;










