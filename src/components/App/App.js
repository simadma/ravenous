import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";

const App = () => (
  <div className={styles.App}>
    <h1>ravenous</h1>
    <BusinessList />
  </div>
);

export default App;
