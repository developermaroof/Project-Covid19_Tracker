import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = () => {
  const [fetchedCountries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
