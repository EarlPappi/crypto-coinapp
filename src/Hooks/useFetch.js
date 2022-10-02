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
            return {...state, data: [], loading: true};
        case ACTIONS.FETCH_DATA:
            return {...state, data: payload.data, loading: false};
        case ACTIONS.ERROR:
            return {...state, data: [], loading: false, error: payload};
            
           
    
        default:
            return state;
    }
}



export function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        axios.get(url)
            .then(res => {
                dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data })
            })
            .catch((e) => {
                dispatch({ type: ACTIONS.ERROR, payload: e.error })
            })
    }, [url])


    return state;
}