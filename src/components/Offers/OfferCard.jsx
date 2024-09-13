import cardImg from '../../assets/img/1.png';
import flag from '../../assets/img/flag_cn-4x3.png';
import flag2 from '../../assets/img/flag_mx-4x3.png';

import './OfferCard.scss'

const OfferCard = () => {
    return (
        <div className="offer-card">
            <div className="offer-card__tag">
                <p>New</p>
            </div>
            <div className="offer-card__img">
                <img src={cardImg} alt="" className="offer-card__info-country" />
            </div>
            <h3 className="offer-card__title">Erectin</h3>
            <div className="offer-card__info">
                <div className="offer-card__info-flags">
                    <img src={flag} alt="" />
                    <img src={flag2} alt="" />
                </div>

                <div className="offer-card__info-price">
                    <p className="offer-card__info-price coin">153.56</p>
                </div>
            </div>
        </div>
    );
}

export default OfferCard;