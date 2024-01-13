
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import ShowAllEmployee from './components/ShowAllEmployee';
import Home from './components/Home';
import { useState,useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [empDetails, setEmpDetails] = useState(
    JSON.parse(localStorage.getItem('empDetails')) || null
  )
  useEffect(() => {
    localStorage.setItem('empDetails', JSON.stringify(empDetails));
  }, [empDetails]);

  const handleLoggedIn = (value) => {
    setLoggedIn(value)
  }
  const handleUserDetails = (employee) => {
    console.log(employee)
    setEmpDetails(employee)
  }

  return (
    <>
      <NavBar loggedIn={loggedIn}></NavBar>

      <Routes>
        <Route path='/' element={<ShowAllEmployee />}></Route>
        <Route path='/login' element={<Login onLoggedIn={handleLoggedIn} onUserDetails={handleUserDetails}></Login>}></Route>
        <Route path='/home' element={<Home empDetails={empDetails} ></Home>}></Route>

      </Routes>

    </>
  );
}

export default App;
