import { createContext, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

// const greet = "Hello Worrrrrrrld";

const userContext = createContext();

const positive = (change) => {
    if (change > 1) {
        return true
    } else {
        return false
    }
};

export const ContextProvider = ({ children }) => {
    const {data:coinData, loading:coinLoading, error:coinError} = useFetch('https://coingecko.p.rapidapi.com/coins/markets');



    return (
        <userContext.Provider value={{
            coinData,
            coinError,
            coinLoading,
            positive
        }}>
            {children}
        </userContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(userContext);
}