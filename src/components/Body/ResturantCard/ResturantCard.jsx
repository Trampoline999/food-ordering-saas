import React from 'react'
import './ResturantCard.css'


const ResturantCard = ({ name, cuisine, rating, time, imgSrc, offer, tag ,price}) => {
  return (
    <div className='res-card'>

      {/* ── Image ── */}
      <div className='res-card-img-wrap'>
        <img src={imgSrc} alt={name} />

        {/* Top-left tag e.g. "Bestseller" */}
        {tag && (
          <span className='res-card-tag hot'>{tag}</span>
        )}

        {/* Offer text over image e.g. "60% OFF up to ₹120" */}
        {offer && (
          <span className='res-card-offer'>🏷 {offer}</span>
        )}
      </div>

      {/* ── Body ── */}
      <div className='res-card-body'>

        <h3>{name || 'Megna Foods'}</h3>
        <h4 className='cuisine'>{cuisine || 'Biryani, North Indian, Asian'}</h4>

        <div className='res-card-divider' />

        <div className='res-card-meta'>
          {/* Rating chip */}
          <div className='res-card-meta-item rating'>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {rating || '4.3'}
          </div>

          <span className='res-card-meta-dot' />

          {/* Delivery time */}
          <div className='res-card-meta-item'>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {time || '38'}
          </div>
          <div className='res-card-meta-price'>
           ₹{price+'.00'}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ResturantCard;