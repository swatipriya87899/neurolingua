import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom' 
import logo from './../../images/logo.png';
import dashboard from './../../images/dashboard-icon.png';
import course from './../../images/course-icon.png';
import calendar from './../../images/calendar-icon.png';
import student from './../../images/student-icon.png';
import blog from './../../images/blog-icon.png';
import coupon from './../../images/coupon-icon.png';
import dollar from './../../images/dollar-icon.png';
import logout from './../../images/login-icon.png';


const Sidebar = () => {

    // For Navigation in different Pages
    const navigate = useNavigate();

    const sidebar_option= [
        {
            icon:dashboard,
            option:"Dashboard",
            url:"/"
        },
        {
            icon:course,
            option:"Courses",
            url:"/course"
        },
        {
            icon:calendar,
            option:"Availability",
            url:"/availability"
        },
        {
            icon:student,
            option:"Students",
            url:"/students"
        },
        {
            icon:blog,
            option:"Blog",
            url:"/blog"
        },
        {
            icon:coupon,
            option:"Coupons",
            url:"/coupons"
        },
        {
            icon:dollar,
            option:"Earnings",
            url:"/earning"
        },
        {
            icon:dollar,
            option:"Setting",
            url:"/setting"
        },
    ];

  
function changeRoute (url){
    navigate(`${url}`);
}
    
  return (
    <div className='sidebar'>
        <div className='sidebar_logo'>
            <img src={logo}></img>
        </div>

        {/* Displaying dashboard option */}
        {
            sidebar_option.map((sidebar)=>{
                return(
                    <div className='siderbar_option_box' key={sidebar.option} onClick={()=>changeRoute(sidebar.url)}>
                        <img src={sidebar.icon} alt="image not found"  className='sidebar_icon'></img>
                        <div className='siderbar_option'>{sidebar.option}</div>
                    </div>
                )
            })
        }
        <button className='logout_button'>
            <div className='logout_icon'><img src={logout}/></div>Logout</button>
    </div>
  )
}

export default Sidebar