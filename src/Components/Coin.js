
import React from 'react';
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {


  return (
    <div className="coin-container">
      <div className="coin-row">

        <h1 className="coin-name">{name}</h1>
        <img className="coin-image" src={image} alt="Coin Logo"/>
        <p className="coin-symbol">{symbol}</p>

        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>{priceChange.toFixed(2)}%</p>
          <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>

      </div>
    </div>
  );
}

export default Coin;
