import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc: "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "Mama Margarita",
  address: "3214 Pizza Street",
  city: "Pizza Town",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.9,
  reviewCount: 89,
};

const n = 6;

const businesses = new Array(n).fill({...business});

const App = () => (
  <div className={styles.App}>
    <h1>ravenous</h1>
    <SearchBar />
    <BusinessList businesses={businesses} />
  </div>
);

export default App;
