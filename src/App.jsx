import React, { useState } from "react";
import AdditionalFilter from "./features/components/Filter/AdditionalFilter/AdditionalFilter";
import Filter from "./features/components/Filter/Filter";
import Header from "./features/components/Header/Header";

const initialFilterValues = {
  searchbar: "",
  dateFrom: "",
            dateTo: "",
            statuses: "",
            sumFrom: "",
            sumTo: "",
            orderStatuses: {
              Новый: false,
              Расчет: false,
    Подтвержден: false,
    Отложен: false,
    Выполнен: false,
    Отменен: false,
  },
};

function App() {
  const [additionalFilterVisibility, setAdditionalFilterVisibility] =
    useState(false);
  const [filterValues, setFiltersValues] = useState(initialFilterValues);
  const resetAllFilterValuesHandler = () =>
    setFiltersValues(initialFilterValues);
  return (
    <div className="pageWrapper">
      <Header />
      <Filter
        filterValues={filterValues}
        setFiltersValues={setFiltersValues}
        additionalFilterVisibility={additionalFilterVisibility}
        setAdditionalFilterVisibility={setAdditionalFilterVisibility}
        resetAllFilterValues={resetAllFilterValuesHandler}
      >
        {additionalFilterVisibility && (
          <AdditionalFilter
            filterValues={filterValues}
            setFiltersValues={setFiltersValues}
          />
        )}
      </Filter>
    </div>
  );
}

export default App;
