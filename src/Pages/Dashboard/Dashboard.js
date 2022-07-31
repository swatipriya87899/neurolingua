import React,{useState} from 'react';
import './Dashboard.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header';
import Coupon from '../../components/coupon/Coupon';
import Form from '../../components/form/Form';

const Dashboard = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  function form (visibility) {
    setFormVisibility(visibility);
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
        <div className='more_section'><button className='secondary_button'>More</button></div>
        </div>

    </div>
  )
}

export default Dashboard