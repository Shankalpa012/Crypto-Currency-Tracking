import React from 'react'
import "./Coins.css"

const Coin = ({name, image,symbol,price,volume, price_change, rank}) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="This is the logo of currency" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <div className="coin-price">NPR {(price *1.6).toLocaleString()}</div>
                    <div className="coin-volume">NPR {(volume *1.6).toLocaleString()}</div>
                    {price < 0 ?
                    ( <p className = "coin-percent red">{price_change.toFixed(2) }%</p>) : 
                    ( <p className = "coin-percent green">{price_change.toFixed(2)}%</p>)
                    
                    }
                    <p className="current-rank">Crr.Rank : {rank}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
