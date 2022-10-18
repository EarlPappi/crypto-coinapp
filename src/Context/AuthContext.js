import { createContext, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

// const greet = "Hello Worrrrrrrld";

const userContext = createContext();

export const ContextProvider = ({ children }) => {
    const {data:coinData, loading:coinLoading, error:coinError} = useFetch('https://coingecko.p.rapidapi.com/coins/markets');
    
    
    console.log("Coin Data: ", coinData)
    console.log("Coin Loading: ", coinLoading)
    console.log("Coin Error: ", coinError)


    return (
        <userContext.Provider value={{
            coinData,
            coinError,
            coinLoading
        }}>
            {children}
        </userContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(userContext);
}