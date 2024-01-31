import { useEffect, useState } from "react";
import styles from './ShowAllEmployee.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Checkbox, Input } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';



function ShowAllEmployee() {
    const [empList, setEmpList] = useState([])
    const [popup, setPopup] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/show_all_employee')
            .then(response => response.json())
            .then(data => setEmpList(data))
    }, []);

    const handlepopup = () => {
        setPopup(true);
    }

    const handleClose = () => {
        setPopup(false);
    }

    const handleAdd = () => {
        setPopup(false);
    }



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
        <button onClick={() => handlepopup()}>
            Add Client
        </button>

        <Dialog open={popup}>
            <DialogTitle>Add New Client</DialogTitle>
            <DialogContent>
                <Input placeholder="Enter Client Hostname" />
                
                <br></br>
                <br></br>
                <FormControlLabel
                    control={<Checkbox name="read" />}
                    label="Read"
                />
                <FormControlLabel
                    control={<Checkbox name="write" />}
                    label="Write"
                />
                <FormControlLabel
                    control={<Checkbox name="superuser" />}
                    label="Superuser"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAdd}>Add</Button>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>

    </div>

}

export default ShowAllEmployee;