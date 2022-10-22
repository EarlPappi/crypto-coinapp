import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../../../Hooks/useFetch';
import TradingViewWidget from 'react-tradingview-widget';
import { useAuth } from '../../../../Context/AuthContext';



function CoinDetail({ coinData }) {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://coingecko.p.rapidapi.com/coins/${id}`);

  const positive = (change) => {
    if (change > 0) {
        return true
    } else if(change < 0){
        return false
    }
};


  console.log("Coin Details Data", data);

  const coinDetail = data[0];

  const navigate = useNavigate();

  return (
    <div>


      {loading ? <h1>Details Loading</h1> :
        <div>

          <div className='w-11/12 mx-auto p-6 rounded-xl bg-[#EEF1F3] mb-6' >
            <span className='px-4 py-2 my-4 text-white rounded-lg cursor-pointer bg-red-600 inline-block' onClick={() => {
              navigate(-1)
            }}>Go back</span>
            {/* <h1 className='font-bold text-center md:text-left md:text-2xl'>{coinDetail?.name}</h1> */}

            <div>
              <TradingViewWidget
                symbol={coinDetail?.symbol.toUpperCase()}
                width="980px"
                height="410px"
                interval="30"
                timezone="Etc/UTC"
                theme="dark"
                style="1"
                locale="en"
                toolbar_bg="#f1f3f6"
                enable_publishing={false}
                save_image={false}
                container_id="tradingview_79bf0"
              />

            </div>

            <div>
              <div className='flex my-4 gap-4 rounded-lg'>
                <div className='flex w-1/3 flex-col gap-8 justify-center p-8 bg-slate-300 rounded-2xl'>
                  <div className='flex justify-center items-center gap-2'>
                    <div>
                      <img src={coinDetail?.image.small} alt="" />
                    </div>
                    <h1 className='font-bold text-4xl'>{coinDetail?.name}</h1>
                  </div>

                  <div className='flex gap-4 justify-center'>
                    <span className='block p-2 bg-slate-200 rounded-lg'>Rank #{coinDetail?.market_cap_rank}</span>
                    <span className='block p-2 bg-slate-200 rounded-lg'>{coinDetail?.symbol.toUpperCase()}</span>
                  </div>

                </div>

                <div className='w-2/3 bg-slate-300 p-4 rounded-2xl'>
                  <div className='flex gap-4 mb-2'>
                    <p className='font-bold text-4xl'>Market Price: ${coinDetail?.market_data.current_price.usd}</p>
                    <p style={{
                      backgroundColor: positive(coinDetail?.market_data.price_change_24h) ? 'green' : 'red'
                    }} className='py-2 px-3 text-white font-bold inline-block rounded-lg'>{coinDetail?.market_data.price_change_24h.toFixed(2)}</p>

                  </div>

                  <div>
                    <div className='flex gap-4 my-3 items-center' >
                      <p className='bg-black text-white rounded-md p-2'>Circulating Supply</p>
                      <p>{coinDetail?.market_data.circulating_supply}</p>

                    </div>

                    <div className='flex gap-4 my-3 items-center'>
                      <p className='bg-black text-white rounded-md p-2'>Fully Diluted Valuation</p>
                      <p>{coinDetail?.market_data.circulating_supply}</p>

                    </div>

                    <div className='flex gap-4 my-3 items-center'>
                      <p className='bg-black text-white rounded-md p-2'>Fully Diluted Valuation</p>
                      <p>USD{coinDetail?.market_data.fully_diluted_valuation.usd}</p>

                    </div>

                    <div className='flex gap-4 my-3 items-center'>
                      <p className='bg-black text-white rounded-md p-2'>Market Cap</p>
                      <p>USD{coinDetail?.market_data.market_cap.usd}</p>

                    </div>
                  </div>

                </div>
              </div>

              <div className='w-full bg-slate-300 p-4 rounded-2xl'>
                <h1>Description</h1>
                <html>

                  {coinDetail?.description.en}
                </html>

              </div>



            </div>





          </div>



        </div>
      }
    </div >
  )
}

export default CoinDetail