import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
        <form className='form_data'>
        <input placeholder='Course name' className='bottom_border_input'></input>
        <input placeholder='Course name' className='bottom_border_input'></input>
        <input placeholder='Course name' className='bottom_border_input'></input>
        <input className='input'></input>
        <input className='input'></input>
        <button className='secondary_button'>Create</button>
        </form>
    </div>
  )
}

export default Form