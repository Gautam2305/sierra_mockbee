import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider  = ({children}) => {

    const [user, setUser] = useState({users: null, token: null});

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };