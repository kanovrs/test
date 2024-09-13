import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../store/slices/offersSlice";
import Button from "../Buttons/Button";
import "./OffersFilterModal.scss";
import Icon from "../Icon";

export default function OffersFilterModal({
  isOpen,
  onClose,
  filtersData,
}) {
  const dispatch = useDispatch();

  const initializeFilters = () => {
    const initialFilters = {};
    filtersData.forEach((filter) => {
      if (filter.type === "checkbox") {
        initialFilters[filter.name] = filter.defaultValue || false;
      } else if (filter.type === "text" || filter.type === "search") {
        initialFilters[filter.name] = filter.defaultValue || "";
      } else if (filter.type === "multi-select") {
        initialFilters[filter.name] = filter.options.reduce((acc, option) => {
          acc[option] = false;
          return acc;
        }, {});
      } else if (filter.type === "select") {
        initialFilters[filter.name] = filter.defaultValue || "";
      }
    });
    return initialFilters;
  };

  const [filters, setFilters] = useState(initializeFilters);

  useEffect(() => {
    setFilters(initializeFilters());
  }, [filtersData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && filtersData.some((filter) => filter.name === name && filter.type === "multi-select")) {
      const option = value;
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: {
          ...prevFilters[name],
          [option]: checked,
        },
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const resetFilters = () => {
    setFilters(initializeFilters());
  };

  const handleApply = () => {
    const transformedFilters = filtersData.reduce((acc, filter) => {
      if (filter.type === "multi-select") {
        acc[filter.name] = Object.keys(filters[filter.name]).filter(
          (key) => filters[filter.name][key]
        );
      } else {
        acc[filter.name] = filters[filter.name];
      }
      return acc;
    }, {});

    dispatch(applyFilters(transformedFilters));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__header">
        <h3>Фильтр</h3>
        <Button
          iconFirst="trash"
          className="icon"
          text="Очистить"
          onClick={resetFilters}
        ></Button>
        <button className="sidebar__close" onClick={onClose}></button>
      </div>
      <div className="modal__content">
        <div className="filters">
          {filtersData.map((filter) => (
            <div key={filter.name} className="filter">
              {filter.name === "serch" && (
                <div className="search"> 
                  
                   
                  <input
                    type="text"
                    placeholder={filter.placeholder}
                    name={filter.name}
                    value={filters[filter.name] || ""}
                    onChange={handleChange}
                  />
                  <Icon name="search" className="icon" />
                 
                  </div>
                )}
              {filter.type === "checkbox" && (
                <label className="toggle-wraper">
                  {filter.label}
                  <label className="toggle-container">
                    <input
                      type="checkbox"
                      name={filter.name}
                      checked={filters[filter.name] || false}
                      onChange={handleChange}
                    />
                    <span className="toggle-switch"></span>
                  </label>
                </label>
              )}
              {filter.type === "multi-select" && (
                <label>
                  {filter.label}
                  <div className="multi-select">
                    {filter.options.map((option) => (
                      <label key={option}>
                        <input
                          type="checkbox"
                          name={filter.name}
                          value={option}
                          checked={filters[filter.name][option] || false}
                          onChange={handleChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </label>
              )}
              {filter.type === "select" && (
                <label>
                  {filter.label}
                  <select
                    name={filter.name}
                    value={filters[filter.name] || ""}
                    onChange={handleChange}
                  >
                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </div>
          ))}
        </div>
        <Button
          className="apply-button"
          onClick={handleApply}
          text="Применить"
        ></Button>
        <Button
          className="close-button"
          onClick={onClose}
          text="Закрыть"
        ></Button>
      </div>
    </div>
  );
}
