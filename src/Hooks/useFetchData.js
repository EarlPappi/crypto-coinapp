import axios from "axios";
import { useReducer, useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': '109458d1c1mshf326f104806cbc5p141f47jsn5024dc468d34',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

const ACTIONS = {
    API_REQUEST: 'api-request',
    FETCH_DATA: 'fetch-data',
    ERROR: 'error'
}

const initialState = {
    coinData: [],
    loading: false,
    error: null
}

function reducer(state, { type, payload }){
    switch(type){
        case ACTIONS.API_REQUEST:
            return {
                ...state,
                data: [],
                loading: true
            }

        
    }
}

export function useFetchData(option) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        axios.request(option).then(res =>{
            dispatch({ type: ACTIONS.FETCH_DATA });
            console.log(res.data);
        })
      
    }, [option])
    

}
