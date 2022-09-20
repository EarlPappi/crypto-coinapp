import { createContext, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

const greet = "Hello Worrrrrrrld"

const userContext = createContext();

export const ContextProvider = ({ children }) => {
    const BASE_URL = 'https://inshortsapi.vercel.app/news?category=science';

    const { data, loading, error } = useFetch(BASE_URL);


    return (
        <userContext.Provider value={{
            greet,
            data,
            loading,
            error
        }}>
            {children}
        </userContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(userContext);
}