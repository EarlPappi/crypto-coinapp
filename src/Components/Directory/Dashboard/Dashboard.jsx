import classes from './Dashboard.module.css';
import { SiBitcoin, SiEthereum } from 'react-icons/si';

const Dashboard = () => {
    return (
        <div className={`${classes.dashMainCon}`}>
            <div className=''>
                <div>
                    <h1>Your Balances</h1>

                    <div className={`${classes.portCon} flex gap-[1em]`}>
                        <div className={`${classes.port1} p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiBitcoin /> Bitcoin  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                10.0098392
                            </h1>
                        </div>

                        <div className={`${classes.port1} p-4 rounded-[1em]`}>
                            <p className='flex items-center gap-2 text-center'><SiEthereum /> Ethereum  </p>
                            <h1 className='text-center text-2xl font-bold'>
                                10.0098392
                            </h1>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;