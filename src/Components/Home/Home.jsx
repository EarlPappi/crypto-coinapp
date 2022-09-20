import { Outlet } from 'react-router-dom';
import Sidebar from '../Structures/SideBar/Sidebar';
import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.homeCon}>
            <div className={ classes.sidebar }>
                <Sidebar />
            </div>

            <div className={classes.outlet}>
                <Outlet />
            </div>

        </div>
    );
}

export default Home;