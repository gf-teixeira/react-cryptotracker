import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form';
import Coin from './Components/Coin';
function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
         .then(res => {
           setCoins(res.data);
           console.log(res.data);
         })
         .catch((err) => {
           console.error(err);
         })
  }, [])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <Form search={search} setSearch={setSearch}/>

      <div className="coin-list">
    {filteredCoins.map(coin => {
      return (
        <Coin key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.price}
              priceChange={coin.price_change_percentage_24h}
        />
      )
    })}
      </div>
	  </div>
  );
}

export default App;
