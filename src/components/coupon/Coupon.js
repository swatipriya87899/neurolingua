import React from 'react';
import Card from '../card/Card';
import './Coupon.css';

const Coupon = () => {
  return (
    <div>
      <Card title="Coupon Title" discount="48% OFF" details="20 to 28 Sep"></Card>
      <Card title="Coupon Title" discount="58% 0FF" details="20 to 28 Sep"></Card>
      <Card title="Coupon Title" discount="63% OFF" details="20 to 28 Sep"></Card>
    </div>
  )
}

export default Coupon