import React from 'react'
import samplegraph from '../assets/samplegraph.png'
function Card({ icon, name, price, percentage, currency }){

    const isPositive = percentage >= 0;
    return(
        <div className="crypto-card">
          <div className="crypto-header">
              <img src={icon} alt={`${name} logo`} className="crypto-icon" />
              <span className="crypto-name">{name}</span>
          </div>
          <div className="crypto-price">{price.toLocaleString()} {currency}</div>
          <div className={`crypto-percentage ${isPositive ? 'positive' : 'negative'}`}>
              {isPositive ? '+' : ''}{percentage.toFixed(2)}%
          </div>
            {/* Placeholder for the chart, replace with actual chart later */}
          <div className="crypto-chart">
              <img src={samplegraph} alt="chart" />
          </div>
      </div>
    )
}

export default Card