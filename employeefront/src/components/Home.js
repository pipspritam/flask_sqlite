import { useUser } from "../Context/UserContextProvider";

function Home() {
    //const empDetails = JSON.parse(sessionStorage.getItem('empDetails'));
    //const loggedIn = !!empDetails;
    const {empDetails}=useUser()

    return (
        
        <div>
            {empDetails ? <div>
                <h1>Welcome {empDetails.empname} </h1>
                <p>EmpId:{empDetails.empid}</p>
                <p>Storage size:{empDetails.storage_size}</p>
                <button>Increase storage</button>
                <button>Clear storage</button>

                </div>
                : <h1>Please login to continue</h1>}
        
        </div>
    );
}

export default Home;