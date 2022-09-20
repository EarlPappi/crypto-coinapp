import { useReducer } from "react"

const ACTIONS ={
    API_REQUEST: 'api-request',
    FETCH_DATA: 'fetch-data',
    ERROR: 'error'
}

function reducer(state, { type, payload }){
    
}

const initialState = {
    data: [],
    loading: true,
    error: null
}

export function useFetch(url){
    const [state, dispatch] = useReducer(reducer, initialState)


    return state;
}