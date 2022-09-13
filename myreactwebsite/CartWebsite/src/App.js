import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
  <>
   <Header />
   <Routes>

    
     <Route path='/home' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
     <Route path='/login' element={<Login/>} />
   </Routes>
  </>
  );
}

export default App;
