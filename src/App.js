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
import HomeScreen from './Components/HomeScreen/HomeScreen';
import ContestScreen from './Components/ContestScreen/ContestScreen'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/register" element={
            <div className='login__register'>
              <Navbar />
              <Register />
              <Footer />
            </div>
          } />
          <Route exact path="/login" element={
            <div className='login__register'>
              <Navbar />
              <Login />
              <Footer />
            </div>
          } />
          <Route path="/home" element={
            <HomeScreen />
          } />
          <Route path="/" element={
            <HomeScreen />
          } />
          <Route path="/contests" element={
            <ContestScreen />
          } />
        </Routes>
      </div >
    </BrowserRouter >
  );
}

export default App;
