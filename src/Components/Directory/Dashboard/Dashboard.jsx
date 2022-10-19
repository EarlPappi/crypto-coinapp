import classes from './Dashboard.module.css';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { useAuth } from '../../../Context/AuthContext';
import CoinList from './CoinData/CoinList';

const Dashboard = () => {

    const { coinData, coinError, coinLoading } = useAuth();

    console.log("Dashboard Coin: ", coinData)


    return (
        <div className={`${classes.dashMainCon}`}>
            <div className=''>
                {/* Account Balance */}
                <div className='w-11/12 mx-auto p-6 rounded-xl bg-[#EEF1F3] mb-6' >
                    <h1 className='font-bold text-center md:text-left md:text-2xl'>Your Balances</h1>

                    <div className={`${classes.portCon} flex flex-col md:flex-row  md:justify-center gap-[1em]`}>
                        <div className={`${classes.port1} bg-slate-300 p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiBitcoin /> Bitcoin  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                50.0098392
                            </h1>
                        </div>

                        <div className={`${classes.port1} bg-slate-300 p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiBitcoin /> Bitcoin  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                10.0098392
                            </h1>
                        </div>

                        <div className={`${classes.port1} bg-slate-300 p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiBitcoin /> Bitcoin  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                10.0098392
                            </h1>
                        </div>

                        <div className={`${classes.port1} bg-slate-300 p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiEthereum /> Ethereum  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                10.0098392
                            </h1>
                        </div>



                    </div>
                </div>

                {/* Coin List */}
                <div className='w-11/12 mx-auto p-6 rounded-xl bg-[#EEF1F3] my-6'>
                    <h1 className='font-bold text-center md:text-left md:text-2xl'>Coin List</h1>

                    <CoinList coinData={coinData[0]} />

                </div>
            </div>
        </div>
    );
}

export default Dashboard;