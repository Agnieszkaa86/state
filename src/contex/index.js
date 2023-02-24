import { createContext, useContext, useState} from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("Sarah");

    const logIn = (name) => {
        setUsername(name);
    }
    return (
        <UserContext.Provider value={{ username, logIn}}>
            {children}
        </UserContext.Provider>
    )
}