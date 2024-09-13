import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./offerHorizhontal.scss";
import Icon from "../Icon";

export default function OfferHorizhontal({ offer }) {
  const [isDetailsVisible, setDetailVisible] = useState(false);
  const navigate = useNavigate();

  const visibleFlags = offer.countries.slice(0, 2);
  const remainingFlagsCount = offer.countries.length - visibleFlags.length;

  const handleArrowClick = () => {
    setDetailVisible(!isDetailsVisible);
  };

  const handleOfferClick = () => {
    navigate(`/offers/${offer.id}`);
  };

  return (
    <div className="offersList">
      <div className="offerHorizhontal" onClick={handleOfferClick}>
        <img
          className="offerHorizhontal__img"
          src={offer.imageUrl}
          alt={offer.name}
        />
        <div className="offerHorizhontal__txt">
          <span className="offerHorizhontal__name">{offer.name}</span>
          <span className="offerHorizhontal__category">{offer.category}</span>
        </div>
        <div className="offerHorizhontal__flags">
          {visibleFlags.map((country, index) => (
            <img key={index} src={country.flagUrl} alt={country.name} />
          ))}

          {remainingFlagsCount > 0 && (
            <p className="offerHorizhontal__flags-quantity">
              +{remainingFlagsCount}
            </p>
          )}
        </div>
        <div
          className="offerHorizhontal__arow"
          onClick={(e) => {
            e.stopPropagation(); // Останавливаем всплытие события клика
            handleArrowClick();
          }}
        >
          <Icon name="arow" className="icon-smal" />
        </div>
      </div>
      {isDetailsVisible && (
        <div className="offerHorizhontal__details">
          <div className="offerHorizhontal__details-paymant">
            <div className="">
              <p>Оплата</p>
              <p>$12</p>
            </div>
            <div className="">
              <p>Цена</p>
              <p>450 TL</p>
            </div>
            <div className="">
              <p>Appr %</p>
              <p>10%</p>
            </div>
          </div>
          <div className="offerHorizhontal__details-block">
            <div className="offerHorizhontal__details-info">
              <div className="offerHorizhontal__details-offers">
                <p>Товар</p>
                <p>Оплата</p>
                <p>Страна</p>
                <p>Цена</p>
                <p>Коины</p>
                <p>Статус</p>
                <p>icon</p>

                {offer.countries.map((country, index) => (
                  <div key={index} className="offerHorizhontal__details-offer">
                    <div className="">
                      <img
                        className="offerHorizhontal__img"
                        src={offer.imageUrl}
                        alt={offer.name}
                      />
                      <div className="">
                        <p>{offer.name}</p>
                        <p>{offer.category}</p>
                      </div>
                    </div>
                    <p>{country.payment}</p>
                    <div className="flag">
                       <img key={index} src={country.flagUrl} alt={country.name} />
                  <p>{country.name}</p>
                    </div>
                    
                    <p>{country.price}</p>
                    <p>{country.coins}</p>
                    <p>{country.status}</p>
                    <p>icon</p>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
