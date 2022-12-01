import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/register" element={
            <div className='login__register'>
              <Register />
              <Footer />
            </div>
          } />
          <Route exact path="/login" element={
            <div className='login__register'>
              <Login />
              <Footer />
            </div>
          } />
          <Route path="/" element={<div className='login__register'>
            <Login />
            <Footer />
          </div>} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
