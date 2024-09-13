import React from 'react';
import OfferCard from './OfferCard';

import './Offers.scss'

const Offers = () => {
  return (

    <section className="offers">
      <div className="container">
          <h2>Офферы</h2>
          <div className="offers__list">
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            {/* Карточки офферов */}
          </div>
        </div>
    </section>
  );
};

export default Offers;
