import React from 'react'
import CoinItem from './CoinItem'

function CoinList({ coinData }) {
    return (
        <div>
            <h1>Starts Here</h1>
            {coinData ? <div>
                {coinData.map((coin) => {
                    return (
                        <CoinItem coinData={coin} />

                    )
                })}
            </div> : <h1>Chill, Coins Loading</h1>} 
        </div>
    )
}

export default CoinList