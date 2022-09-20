import classes from './Sidebar.module.css';
import Wrapper from '../../Container/Wrapper'
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/earlLogo.png';
import {  FaChartLine } from 'react-icons/fa';
import { MdOutlineDashboardCustomize, MdOutlineContactSupport } from 'react-icons/md';
import { RiExchangeCnyFill } from 'react-icons/ri';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div className={classes.sidebarCon}>
            <Wrapper>
                <div>
                   <Link to='/'> <img src={Logo} alt="" width="100%" /></Link>
                </div>

                <nav className={classes.sidebarNav}>
                    <Link to='dashboard'><span><MdOutlineDashboardCustomize /></span> <span>Dashboard</span></Link>
                    <Link to='exchange'><span><RiExchangeCnyFill /></span> <span>Exchange</span></Link>
                    <Link to='statistics'><span><FaChartLine /></span> <span>Statistics</span></Link>
                    <Link to='portfolio'><span><IoBriefcaseOutline /></span> <span>Portfolio</span></Link>
                    <Link to='about-us'><span><AiOutlineTeam /></span> <span>About Us</span></Link>
                    <Link to='contact-us'><span><MdOutlineContactSupport /></span> <span>Contact Us</span></Link>
                </nav>

            </Wrapper>

        </div>
    );
}

export default Sidebar;