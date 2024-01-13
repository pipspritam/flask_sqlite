// UserContext.js
import { createContext, useState ,useContext} from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [empDetails, setEmpDetails] = useState(null);

  const loginUser = (empDetails) => {
    setEmpDetails(empDetails);
  };

  const logoutUser = () => {
    setEmpDetails(null);
  };

  return (
    <UserContext.Provider value={{ empDetails, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser=()=>{
    return useContext(UserContext)
}
export default UserContext;
