import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='login__register'>
        {/* <Login /> */}
        <Register />
        <Footer style={{ marginTop: 'auto' }} />
      </div>
    </div>
  );
}

export default App;
