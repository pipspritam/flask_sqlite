import { useEffect, useState } from "react";
import styles from './ShowAllEmployee.module.css';

function ShowAllEmployee() {
    const [empList, setEmpList] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/show_all_employee')
            .then(response => response.json())
            .then(data => setEmpList(data))
    },[]);



    return <div className={styles.container}>
        <h1 className={styles.header}>List of all Employee</h1>
        <table>
            <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Storage Size</th>
            </tr>
            </thead>
            {
                empList.map((emp) =>
                    <tbody key={emp.empid}>
                    <tr >
                        <td>{emp.empid}</td>
                        <td>{emp.empname}</td>
                        <td>{emp.storage_size}</td>
                    </tr>
                    </tbody>
                )
            }
        </table>
    </div>

}

export default ShowAllEmployee;