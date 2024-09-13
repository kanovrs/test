import { createSlice } from "@reduxjs/toolkit";

import photoOffer from "../../assets/img/1.png";
import flagcn from "../../assets/img/flag_cn-4x3.png";
import flagmx from "../../assets/img/flag_mx-4x3.png";

const offtest = [
  {
    name: "Erectin",
    category: "Потенция",
    imageUrl: photoOffer,
    countries: [
      {
        name: "China",
        flagUrl: flagcn,
        payment: "$12",
        price: "450 TL",
        coins: "100",
        status: "Available",
        coin: "2",
      },
      {
        name: "Mexico",
        flagUrl: flagmx,
        payment: "$12",
        price: "450 TL",
        coins: "100",
        status: "Available",
      },
      {
        name: "USA",
        flagUrl: flagcn,
        payment: "$12",
        price: "450 TL",
        coins: "100",
        status: "Available",
      },
    ],
    recommended: false,
    coins: ["RUB"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
    id: 1,
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
    id: 2,
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
    id: 3,
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
    id: 4,
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
    id: 5,
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },

  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
  {
    name: "EM",
    category: "re",
    imageUrl: photoOffer,
    countries: [
      { name: "China", flagUrl: flagcn },
      { name: "Mexico", flagUrl: flagmx },
      { name: "USA", flagUrl: flagcn },
    ],
    recommended: false,
    coins: ["USD", "EUR"],
    inHouse: false,
    newOffers: false,
    lowPrice: false,
    currency: "",
    paymentModel: "",
  },
]; // Инициализация из localStorage
const initialState = {
  offers: offtest,
  filteredOffers: JSON.parse(localStorage.getItem("filteredOffers")) || [],
  loading: false,
  error: null,
  currentPage: JSON.parse(localStorage.getItem("currentPage")) || 1, // Текущая страница
  offersPerPage: JSON.parse(localStorage.getItem("offersPerPage")) || 9, // Количество товаров на странице
  filters: JSON.parse(localStorage.getItem("filters")) || {}, // Загружаем фильтры из localStorage
};
console.log(
  "filtred offers" + JSON.parse(localStorage.getItem("filteredOffers"))
);

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers(state, action) {
      state.offers = action.payload;
      state.filteredOffers = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      // Сохраняем текущую страницу в localStorage
      localStorage.setItem("currentPage", JSON.stringify(action.payload));
    },
    setOffersPerPage(state, action) {
      state.offersPerPage = action.payload;
      state.currentPage = 1; // сбрасываем на первую страницу при изменении количества элементов на странице
      // Сохраняем количество элементов на странице в localStorage
      localStorage.setItem("offersPerPage", JSON.stringify(action.payload));
    },
    applyFilters(state, action) {
      const filters = action.payload;
      state.filters = filters;

      // Сохраняем фильтры в localStorage
      localStorage.setItem("filters", JSON.stringify(filters));

      // Сбрасываем текущую страницу при применении фильтров
      state.currentPage = 1;

      // Применяем фильтры к офферам
      state.filteredOffers = state.offers.filter((offer) => {
        const matchesName =
          !filters.name ||
          offer.name.toLowerCase().includes(filters.name.toLowerCase());
        const matchesCategory =
          !filters.category ||
          offer.category.toLowerCase().includes(filters.category.toLowerCase());
        const matchesCountry =
          !filters.country ||
          offer.countries.some((c) =>
            c.name.toLowerCase().includes(filters.country.toLowerCase())
          );
        const matchesRecommended =
          filters.recommended === undefined ||
          offer.recommended === filters.recommended;
        const matchesCoins =
          filters.coins.length === 0 ||
          filters.coins.some((coin) => offer.coins.includes(coin));
        const matchesInHouse =
          filters.inHouse === undefined || offer.inHouse === filters.inHouse;
        const matchesNewOffers =
          filters.newOffers === undefined ||
          offer.newOffers === filters.newOffers;
        const matchesLowPrice =
          filters.lowPrice === undefined || offer.lowPrice === filters.lowPrice;
        const matchesCurrency =
          !filters.currency ||
          offer.currency.toLowerCase().includes(filters.currency.toLowerCase());
        const matchesPaymentModel =
          !filters.paymentModel ||
          offer.paymentModel
            .toLowerCase()
            .includes(filters.paymentModel.toLowerCase());

        return (
          matchesName &&
          matchesCategory &&
          matchesCountry &&
          matchesRecommended &&
          matchesCoins &&
          matchesInHouse &&
          matchesNewOffers &&
          matchesLowPrice &&
          matchesCurrency &&
          matchesPaymentModel
        );
      });

      // Проверка фильтрованных данных
      console.log("Filtered offers before saving: ", state.filteredOffers);

      // Сохраняем отфильтрованные предложения в localStorage
      try {
        localStorage.setItem(
          "filteredOffers",
          JSON.stringify(state.filteredOffers)
        );
        console.log(
          "Filtered offers saved: " + JSON.stringify(state.filteredOffers)
        );
      } catch (error) {
        console.error("Error saving filtered offers to localStorage:", error);
      }
    },
  },
});

export const {
  setOffers,
  setLoading,
  setError,
  setCurrentPage,
  setOffersPerPage,
  applyFilters,
} = offersSlice.actions;

export default offersSlice.reducer;
