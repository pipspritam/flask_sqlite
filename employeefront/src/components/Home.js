function Home() {
    const empDetails = JSON.parse(sessionStorage.getItem('empDetails'));
    const loggedIn = !!empDetails;

    return (
        <h1>
            {loggedIn ? `Welcome ${empDetails.empname}` : 'Please login to continue'}
        </h1>
    );
}

export default Home;