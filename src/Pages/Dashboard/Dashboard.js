import React,{useState} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header';
import Coupon from '../../components/coupon/Coupon';
import Form from '../../components/form/Form';

const Dashboard = () => {

  //For Navigating
  const navigate = useNavigate()

  //States for controlling visibilty of the form
  const [formVisibility, setFormVisibility] = useState(false);

//form visibility function setting value from Header + onclick (child)
  function form (visibility) {
    setFormVisibility(visibility);
  }

  //For nativating the Valid Url
  function changeRoute (url){
    navigate(`${url}`);
}
  return (
    <div className='dashboard'>
        <div style={{flexBasis:"0"}}>
        <Sidebar></Sidebar>
        </div>
        <div style={{flexBasis:"100vw"}}>
        <Header visibility={form}></Header>
        {
          formVisibility && <Form></Form>
        }
        <Coupon></Coupon>
        <div className='more_section'><button className='secondary_button' onClick={()=>changeRoute("/more")}>More</button></div>
        </div>

    </div>
  )
}

export default Dashboard