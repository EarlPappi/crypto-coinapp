import React from 'react'
import { Link } from 'react-router-dom'
import CoinDetail from '../CoinDetails/CoinDetail'

function CoinItem({ coinData }) {
    return (
        <>
            <Link to={`/statistics/${coinData.id}`} className='flex items-center gap-4 p-3 my-3 rounded-xl bg-gray-300 hover:bg-[#226BD0]'>
                <div className='w-1/12'>
                    <img src={coinData.image} alt="" />
                </div>

                <div className='w-2/12 overflow-hidden'>
                    <div className='flex flex-col'>
                        <span className='md:text-center'>{coinData.name}</span>
                        <span className='uppercase bg-black text-center text-sm p-1 rounded-lg text-white '>{coinData.symbol}</span>
                    </div>

                </div>


            </Link>
        </>

    )
}

export default CoinItem