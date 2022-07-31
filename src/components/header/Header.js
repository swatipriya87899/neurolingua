import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  //For Naviagation
  let navigate = useNavigate();

  //For Visibility Of the Form
  const [formVisibility, setFormVisibility] = useState(false);

  //Function To set Visibility of the Form
  function onClickHandler(){
    setFormVisibility(()=>
      formVisibility ? false : true
   )
    props.visibility(formVisibility);
  }


  //Routing Function
  function changeRoute (url) {
    navigate(url)
  }

  return (
    <div className='header'>
        <div>Coupans</div>
        <div>Most Recent</div>
        <div>Special</div>
        <button className='secondary_button' onClick={()=>changeRoute("/expired")}>Expired</button>
        <button className='secondary_button round_button' onClick={onClickHandler}>+</button>
    </div>
  )
}

export default Header