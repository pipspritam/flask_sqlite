
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ShowAllEmployee from './components/ShowAllEmployee';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<ShowAllEmployee />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

      </Routes>

    </>
  );
}

export default App;
