import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../../../Hooks/useFetch';



function CoinDetail({ coinData }) {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://coingecko.p.rapidapi.com/coins/${id}`);

  console.log("Coin Details Data", data);

  const coinDetail = data[0];

  const navigate = useNavigate();

  return (
    <div>
      <span className='px-4 py-2 text-white rounded-lg cursor-pointer bg-red-600 inline-block' onClick={() => {
        navigate(-1)
      }}>Go back</span>

      {loading ? <h1>{data[0]?.name}</h1> :
        <div>
          <h1>{coinDetail?.name}</h1>

        </div>
      }
    </div>
  )
}

export default CoinDetail