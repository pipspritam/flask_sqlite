import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    const empDetails = JSON.parse(sessionStorage.getItem('empDetails'));
    const [storage_percentage, setStoragePercentage] = useState(0);

    const handleStoragePercentage = (e) => {
        setStoragePercentage(e.target.value);
    };

    useEffect(()=>{
        console.log("component mount")
    },[storage_percentage])
    const empid = empDetails.empid;

    const handleClearStorage = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://127.0.0.1:5000/clear_storage', { empid });
            const response1 = await axios.get(`http://127.0.0.1:5000/show_employee/${empid}`);
            const updatedEmpDetailsf = response1.data;

            
            sessionStorage.setItem('empDetails', JSON.stringify(updatedEmpDetailsf));
            setStoragePercentage(1);

            

        } catch (error) {
            console.log(error);
        }

    }


    const handleModifyStorage = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://127.0.0.1:5000/modify_storage', { empid, storage_percentage });
            const response1 = await axios.get(`http://127.0.0.1:5000/show_employee/${empid}`);
            const updatedEmpDetails = response1.data;

            
            sessionStorage.setItem('empDetails', JSON.stringify(updatedEmpDetails));

            
            setStoragePercentage(0);

            console.log(updatedEmpDetails);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCreateStorage = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://127.0.0.1:5000/create_storage', { empid });
            const response1 = await axios.get(`http://127.0.0.1:5000/show_employee/${empid}`);
            const updatedEmpDetails = response1.data;

            // Update sessionStorage
            sessionStorage.setItem('empDetails', JSON.stringify(updatedEmpDetails));

           

            console.log(updatedEmpDetails);
            setStoragePercentage(0);

        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <div>
            {empDetails ? (
                <div>
                    <h1>Welcome {empDetails.empname} </h1>
                    <div>
                        <p>EmpId: {empDetails.empid}</p>
                        <p>Storage size: {empDetails.storage_size}</p>
                    </div>
                    <div>
                    <button onClick={handleCreateStorage}>Create Storage</button><br></br>
                        <input type="number" placeholder="Enter new storage size" onChange={handleStoragePercentage} value={storage_percentage}></input>
                        <button onClick={handleModifyStorage}>Increase storage</button><br></br>
                        <button onClick={handleClearStorage}>Clear storage</button>
                    </div>
                </div>
            ) : (
                <h1>Please login to continue</h1>
            )}
        </div>
    );
}

export default Home;
