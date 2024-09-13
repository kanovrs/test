import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Button from '../Buttons/Button';
import Icon from '../Icon';

import "./OfferDetails.scss"

const OfferDetails = () => {
  const { id } = useParams(); // Извлекаем id из URL
  const offers = useSelector((state) => state.offers.offers); // Получаем офферы из Redux
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      console.log(offers)
      const fetchedOffer = offers.find((offer) => offer.id === parseInt(id)); // Преобразуем id в число
      console.log(fetchedOffer)
      if (!fetchedOffer) {
        throw new Error('Оффер не найден');
      }
      setOffer(fetchedOffer);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id, offers]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!offer) return <div>Оффер не найден</div>;

  const country = offer.countries[0] || {};


  return (
    <div className='offer-page'>
      <div className="offer-page__header">
        <div className="offer-page__tittle">
          <img className="offer-page__tittle-img" src={offer.imageUrl} alt={offer.name} />
          <div className="offer-page__tittle-txt">
             <p className='offer-page__tittle-category'>{offer.category}</p>
            
              <h3 className='offer-page__tittle-name'>{offer.name}</h3>
              <p className='offer-page__tittle-country'>Страна: {country.name}</p>
          
           
          </div>
          
        </div>
        <div className="offer-page__price">
          <div className="offer-page__price-card">
            <Icon className="icon" name="creditcard"/>
            <p className="ofer-page__price-txt">Цена на лендинге</p>
            <p className="ofer-page__price-sum">{ country.price }</p>
          </div>
          <div className="offer-page__price-card">
             <Icon className="icon" name="pig-money"/>
            <p className="ofer-page__price-txt">Выплата</p>
            <p className="ofer-page__price-sum">{ country.payment }</p>
          </div>
          <div className="offer-page__flowbtn">
          <Button iconFirst="plus" firstWidth="21px" firstHeight="21px" text="Создать поток"/>
        </div>
        </div>
        
      </div>
      <div className="offer-page__body">
        <div className="offer-page__info">
          <div className="offer-page__info-title">
            <h3>Информация</h3>
            <p>Вы получите <Icon name="coin-info" className="icon" /> <span className='offer-page__info-title-yellow'>{country.coin}</span> с каждой продажи</p>
          </div>
          </div>
      </div>
      <div className="offer-page__details">
        <div className="offer-page__details-nav">
          <ul className="offer-page__details-nav-list">
            <li className="offer-page__details-nav-item">Информация</li>
            <li className="offer-page__details-nav-item">Отчисления</li>
            <li className="offer-page__details-nav-item">Лендинги</li>
            <li className="offer-page__details-nav-item">Дополнительные материалы</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
