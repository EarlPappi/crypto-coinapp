import classes from './Dashboard.module.css'

const Dashboard = () => {
    return ( 
        <div className={ `${classes.dashMainCon}` }>
            <h1>Dashboard</h1>

            <div className={ `${classes.dashCon} flex gap-[1em]` }>
                <div className={`${classes.port1} flex-1 p-8 rounded-[1em]`}>
                    <h1 className='text-center text-2xl text-white font-bold'>$18,000</h1>
                    <span>Bitcoin</span>
                </div>

                <div className={`${classes.port1} flex-1 p-8 rounded-[1em]`}>
                    <h1 className='text-center text-2xl text-white font-bold'>$18,000</h1>
                    <span>Bitcoin</span>
                </div>

                <div className={`${classes.port1} flex-1 p-8 rounded-[1em]`}>
                    <h1 className='text-center text-2xl text-white font-bold'>$18,000</h1>
                    <span>Bitcoin</span>
                </div>

            </div>
        </div>
     );
}
 
export default Dashboard;