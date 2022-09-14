import './App.css';
import Main from './Main';
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
 
 
const App=()=>{
  return(
  <div>
    <BrowserRouter>
    <Provider store={store}>
    <Main/>
    </Provider>
    </BrowserRouter>
  </div>
  );
}

export default App;
