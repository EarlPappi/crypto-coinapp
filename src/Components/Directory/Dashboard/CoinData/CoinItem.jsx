import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TradingViewWidget from 'react-tradingview-widget';

function CoinItem({ coinData }) {

    const positive = (change) => {
        if (change > 0) {
            return true
        } else if(change < 0){
            return false
        }
    };


    return (
        <>
            <Link to={`/statistics/${coinData.id}`} className='flex items-center gap-4 p-3 my-3 rounded-xl bg-gray-300 hover:bg-[#226BD0]'>
                <div className='w-1/12'>
                    <img src={coinData.image} alt="" />
                </div>

                <div className='w-2/12 overflow-hidden'>
                    <div className='flex flex-col'>
                        <span className='md:text-center block'>{coinData.name}</span>
                        <span className='uppercase block bg-black text-center text-sm p-1 rounded-lg text-white '>{coinData.symbol}</span>
                    </div>

                </div>

                <div className='w-1/12'>
                    <span className='block w-full text-right'>${coinData.current_price.toLocaleString()}</span>
                </div>

                <div className='w-2/12'>
                    <span className='block w-full text-right'>${coinData.market_cap.toLocaleString()}</span>
                </div>

                <div className='w-1/12'>
                    <span className={`block w-full text-right ( )`} style={{
                        color: positive(coinData.price_change_percentage_24h) ? 'green' : 'red'
                    }}>{coinData.price_change_percentage_24h.toFixed(3)}</span>
                </div>

                <div className='w-4/12 text-right'>
                    <TradingViewWidget
                        symbol={coinData.symbol.toUpperCase()}
                        width="280px"
                        height="80px"
                        interval="30"
                        timezone="Etc/UTC"
                        theme="dark"
                        style="1"
                        locale="en"
                        toolbar_bg="#f1f3f6"
                        enable_publishing={false}
                        hide_top_toolbar={true}
                        hide_legend={true}
                        save_image={false}
                        container_id="tradingview_79bf0"
                    />
                </div>


            </Link>
        </>

    )
}

export default CoinItem;