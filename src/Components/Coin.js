
import React from 'react';

const Coin = ({name, image, symbol, price, volume, priceChange}) => {


  return (
    <div className="coin-container">
      <h3 className="coin-name">{name}</h3>
      <img className="coin-image" src={image}/>
       <p className="coin-symbol">{symbol}</p>
      <div className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>
        <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange.toFirex(2)}%</p>
      </div>
    </div>
  );
}

export default Coin;
