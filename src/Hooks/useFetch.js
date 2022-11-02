import axios from "axios";
import { useEffect, useReducer } from "react"

const ACTIONS = {
    API_REQUEST: 'api-request',
    FETCH_DATA: 'fetch-data',
    ERROR: 'error'
}


const initialState = {
    data: [],
    loading: false,
    error: null
}

function reducer(state, { type, payload }) {

    switch (type) {
        case ACTIONS.API_REQUEST:
            return { ...state, data: [], loading: true };
        case ACTIONS.FETCH_DATA:
            return { ...state, data: [payload.data], loading: false };
        case ACTIONS.ERROR:
            return { ...state, data: [], loading: false, error: payload };

        default:
            return state;
    }
}



export function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const options = {
        method: 'GET',
        url: url,
        params: { vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc' },
        headers: {
            'X-RapidAPI-Key': '109458d1c1mshf326f104806cbc5p141f47jsn5024dc468d34',
            'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
        }
    };


    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        axios.get(url, options)
            .then(res => {
                dispatch({ type: ACTIONS.FETCH_DATA, payload: {data: res.data} });
                // console.log('useFetch Data: ', res.data)
            })
            .catch((e) => {
                dispatch({ type: ACTIONS.ERROR, payload: e.error })
            })
    }, [url]);


    return state;
}