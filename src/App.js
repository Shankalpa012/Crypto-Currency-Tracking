import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Coins from "./Coins"


function App() {

  const [coins, setCoins] = useState([]); 
  const [search, setSearch] = useState('')


  useEffect(()=>{
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    )
    .then((res)=>{
      setCoins(res.data)
    })
    .catch(error =>{
      console.log(error)
    })
  },[])


  const handelChange= (e) =>{
    setSearch(e.target.value)
  }

  const filteredCoin = coins.filter((coin)=>{
      return coin.name.toLowerCase().includes(search.toLowerCase())
  })


  


  return (

    <div className="coin-app">
      <h1>Crypto Traker</h1>
      <div className="coin-search">
          
          <h1>Serrch Any Coins</h1>
          <form>
            <input type="text" placeholder="search" className="coin-input" onChange={handelChange}/>
          </form>
          { 
              filteredCoin.map(coin => {
              return (
                <Coins key ={coin.id} 
                name={coin.name}
                image = {coin.image}
                symbol = {coin.symbol}
                volume = {coin.market_cap}
                price = {coin.current_price}
                price_change = {coin.market_cap_change_percentage_24h}
                rank = {coin.market_cap_rank}
                />
              )
             })
            
          }
      </div>
    </div>
  );
}

export default App;
