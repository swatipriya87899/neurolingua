import React from 'react';
import './Card.css';
import logo from './../../images/coupon-logo.png';
import down from './../../images/down-icon.png';
import { useNavigate } from 'react-router-dom';

const Card = ({title, discount, details}) => {
    //For Routing
    let navigate = useNavigate();

    function onClickHandler (){
        navigate("./view")
    }

  return (
    <div className='card_box'>
        <div className='card'>
        <div>
            <img src={logo}></img>
        </div>
        <div className='card_title_box'>
            <div className='card_title'>{title}</div>
            <div className='discount'>{discount}</div>
        </div>
        <div className='details'>
            <div className='sub_details'>Details</div>
            <div>{details}</div>
        </div>
        <div className='primary_button view_button' onClick={onClickHandler}>
            View
            <img src={down}></img>
        </div>
    </div>
    </div>
  )
}

export default Card