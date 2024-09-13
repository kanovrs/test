import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setOffers,
  setLoading,
  setError,
  setCurrentPage,
  setOffersPerPage,
  applyFilters,
} from "../store/slices/offersSlice";

import Button from "../components/Buttons/Button";
import TitleTxt from "../components/TitleTxt/TitleTxt";
import Dropdown from "../components/Pagination/Dropdown";
import Pagination from "../components/Pagination/Pagination";
import OffersList from "../components/Offers/OffersList";
import OffersFilterModal from "../components/Offers/OffersFilterModal";
import "./AllOffers.scss";


export default function Offers() {
  const dispatch = useDispatch();
  const filteredOffers = useSelector((state) => state.offers.filteredOffers);
  const offers = useSelector((state) => state.offers.offers);
  const loading = useSelector((state) => state.offers.loading);
  const error = useSelector((state) => state.offers.error);
  const currentPage = useSelector((state) => state.offers.currentPage);
  const offersPerPage = useSelector((state) => state.offers.offersPerPage);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const options = [2, 9, 18, 27];

  

  const filtersData = [
    { name: "serch", type: "text", placeholder: "Имя" },
    {
      name: "category",
      label: "Категория",
      type: "select",
      options: ["Все", "Простатит", "Потенция", "Алкоголизм"],
    },
    {
      name: "country",
      label: "Страна",
      type: "select",
      options: ["Все", "UA", "TR"],
    },
    { name: "access", label: "Доступные мне", type: "checkbox" },
    {
      name: "other",
      label: "Дополнительно",
      type: "multi-select",
      options: ["Рекомендуем", "Коины", "In-house offers", "New", "Low-price"],
    },
    {
      name: "coins",
      label: "Валюта отчислений",
      type: "multi-select",
      options: ["USD", "RUB", "EUR"],
    },
    {
      name: "modelPay",
      label: "Модель оплаты",
      type: "multi-select",
      options: ["CPL", "CSA", "SS"],
    },
  ];

  useEffect(() => {
    dispatch(setOffers(offers));
    dispatch(setLoading(false));
  }, [dispatch, offers]);

  useEffect(() => {
    dispatch(setCurrentPage(currentPage));
  }, [dispatch, offersPerPage]);

  useEffect(() => {
  const savedFilters = JSON.parse(localStorage.getItem('filters'));
  if (savedFilters) {
    dispatch(applyFilters(savedFilters));
  }
}, [dispatch]);


  const handleApplyFilters = (filters) => {
    dispatch(applyFilters(filters));
    setIsModalOpen(false); 
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;
  const currentOffers = filteredOffers.slice(
    indexOfFirstOffer,
    indexOfLastOffer
  );

  return (
    <div className="offers">
      <div className="offers__title title">
        <TitleTxt titleTxt={`Все офферы (${filteredOffers.length})`} />
        <div className="offers__btn title__btn">
          <p className="offers__btn-txt">Сортировать по:</p>
          <Button
            text={"К-во конверсий"}
            classNameSecond="icon-smal"
            iconSecond="arow"
          />
          <Button
            onClick={() => setIsModalOpen(true)}
            text={"Фильтры"}
            classNameSecond="icon-smal"
            iconSecond="filters"
          />
        </div>
      </div>
      <div className="offers__block">
        {currentOffers.length > 0 ? (
          <OffersList offers={currentOffers} />
        ) : (
          <div>Нет доступных предложений</div>
        )}
        <div className="offers__pagination">
          <div className="offers__pagination-select">
            <Dropdown
              options={options}
              selectedOption={offersPerPage}
              onSelectOption={(value) => {
                dispatch(setOffersPerPage(value));
                dispatch(setCurrentPage(1)); // Сбрасываем на первую страницу при изменении количества элементов на странице
              }}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredOffers.length / offersPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <OffersFilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        filtersData={filtersData}
      />
    </div>
  );
}
