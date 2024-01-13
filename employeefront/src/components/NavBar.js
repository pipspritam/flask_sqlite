import styles from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()
    const empDetails = JSON.parse(sessionStorage.getItem('empDetails'));
    const loggedIn = !!empDetails;
    const handleLogout=()=>{
        sessionStorage.removeItem('empDetails')
        navigate('/')

    }
    return (
        <div className={styles.navcontainer}>
            <div className={styles.logo}>
            <Link className={styles.link} to='/'><h1>Texas Instruments</h1></Link>
            </div>
            <div className={styles.login}>
                {loggedIn ?<><button>{empDetails.empname}</button>
                <button onClick={handleLogout}>LogOut</button>
                </> : <Link to='/login' ><button>Login</button></Link>}
            
            </div>
        </div>
    );
}




export default NavBar;