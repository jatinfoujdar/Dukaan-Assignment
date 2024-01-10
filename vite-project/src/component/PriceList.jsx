import React from 'react';
import Price from './Price';

const PriceList = () => {
 
  const prices = [
    { id: 1, date: '7 July 2023', amount: '₹1,287.32', fee: '₹22' },
    
  ];

  return (
    <div>
      {prices.map((price) => (
        <Price key={price.id} {...price} />
      ))}
    </div>
  );
};

export default PriceList;
