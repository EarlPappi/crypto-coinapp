import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../../Hooks/useFetch';



function CoinDetail( { coinData } ) {
    const {id}= useParams();
    const {data, loading, error} = useFetch(`https://coingecko.p.rapidapi.com/coins/${id}`);

    console.log("Coin Details Data", data)

  return (
    <div>CoinDetail
        <h1>{ data[0]?.name }</h1>
    </div>
  )
}

export default CoinDetail