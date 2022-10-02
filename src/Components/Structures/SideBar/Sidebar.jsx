import classes from './Sidebar.module.css';
import Wrapper from '../../Container/Wrapper'
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/earlLogo.png';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlineDashboardCustomize, MdOutlineContactSupport } from 'react-icons/md';
import { RiExchangeCnyFill } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';
import { useFetchData } from '../../../Hooks/useFetchData';

const Sidebar = () => {
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '109458d1c1mshf326f104806cbc5p141f47jsn5024dc468d34',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };



    useFetchData(options);




    return (
        <div className={`${classes.sidebarCon}`}>
            <Wrapper>
                <div className={ `${classes.desktop}` }>
                    <Link to='/'>
                        <img src={Logo} alt="" className=''/>
                    
                    </Link>
                </div>

                <nav className={classes.sidebarNav}>
                    <Link to='dashboard'>
                        <span><MdOutlineDashboardCustomize /></span> <span className={ `${classes.desktop}` }>Dashboard</span>
                    </Link>

                    <Link to='exchange'>
                        <span><RiExchangeCnyFill /></span>
                        <span className={ `${classes.desktop}` }>Exchange</span>
                    </Link>

                    <Link to='statistics'>
                        <span><FaChartLine /></span>
                        <span className={ `${classes.desktop}` }>Statistics</span>
                    </Link>

                    <Link to='portfolio'>
                        <span><IoBriefcaseOutline />
                        </span> <span className={ `${classes.desktop}` }>Portfolio</span>
                    </Link>

                    <Link to='about-us'><span><AiOutlineTeam />
                    </span> <span className={ `${classes.desktop}` }>About Us</span>
                    </Link>

                    <Link to='contact-us'>
                        <span><MdOutlineContactSupport /></span>
                        <span className={ `${classes.desktop}` }>Contact Us</span>
                    </Link>
                </nav>

            </Wrapper>

        </div>
    );
}

export default Sidebar;