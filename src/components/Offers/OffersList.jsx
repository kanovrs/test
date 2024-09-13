import OfferHorizhontal from '../Offers/OfferHorizhontal';

export default function OffersList ({ offers }) {
    return (
        <div >
            {offers.map((offer, index) => (
                <OfferHorizhontal key={index} offer={offer} />
            ))}
        </div>
    );
};


