import { useState } from "react";
import axios from 'axios';
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const [empid, setempid] = useState("");
    const [password, setPassword] = useState("");

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
            console.log(response.data);
            if (response.data == 'allow') {
                navigate('/home')
            }
            else {
                alert('Invalid Credentials')

            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type="text" onChange={handleId} /><br />
            <label>Password: </label>
            <input type="password" onChange={handlePass} /><br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
