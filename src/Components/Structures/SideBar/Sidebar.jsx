import classes from './Sidebar.module.css';
import Wrapper from '../../Container/Wrapper'
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/earlLogo.png';
import { FaChartLine } from 'react-icons/fa';
import { MdOutlineDashboardCustomize, MdOutlineContactSupport } from 'react-icons/md';
import { RiExchangeCnyFill } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';

const Sidebar = () => {
    
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