import { useState } from "react";
import axios from 'axios';
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function Login({onLoggedIn,onUserDetails}) {

    const navigate = useNavigate()
    const [empid, setempid] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    //const [loggedIn,setLoggedIn]=useState(false)

    const handleId = (e) => {
        setempid(e.target.value);
    };

    const handlePass = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', { empid, password });
            const { message, employee } = response.data;
            onLoggedIn(true)
            onUserDetails(employee)
            if (message === 'allow') {
                navigate('/home');
            } 
            
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid credentials. Please try again.');
              } else {
                setErrorMessage('An error occurred. Please try again later.');
              }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <label>Username: </label>
            <input type="text" onChange={handleId} /><br />
            <label>Password: </label>
            <input type="password" onChange={handlePass} /><br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
