import React from 'react'
import CoinItem from './CoinItem'
import { ClipLoader } from 'react-spinners';

function CoinList({ coinData }) {
    return (
        <>
            <div>
                {/* Coil list Header */}
                <div className='flex p-3 bg-gray-300'>
                    <span className='block w-2/12 md:w-1/12 font-bold text-center'>Icon</span>
                    <span className='block w-4/12 md:w-2/12 font-bold text-center'>Name</span>
                    <span className='block w-4/12 md:w-2/12 text-center font-bold'>Price(USD)</span>
                    <span className='hidden md:block w-2/12 text-center font-bold'>Coin Mkt Cap</span>
                    <span className='hidden md:block w-1/12 text-center font-bold'>24hr%</span>
                    <span className='hidden md:block w-4/12 text-center font-bold'>Trading View</span>
                </div>
                {/* Coin list body */}
                {coinData ? <div>
                    {coinData.map((coin) => {

                        return (
                            <CoinItem coinData={coin} key={coin.id} />
                        )
                    })}
                </div> :

                    // Loading state
                    <div className='flex flex-col gap-8 justify-center items-center py-8'>
                        <div>
                            <ClipLoader size={150} />
                        </div>
                        <h1 className='bg-black text-white px-4 py-2 '>Chill, Coins Loading</h1>

                    </div>
                }
            </div>


        </>

    )
}

export default CoinList