import { React, useState } from "react";
import cn from "classnames";
import styles from "../Filter.module.css";
import Input from "../../../../shared/Input/Input";
import OrderMulipleStatusSelector from "../../Dropdowns/OrderMulipleStatusSelector/OrderMulipleStatusSelector";
import Button from "../../../../shared/Button/Button";
import getValueChangerHandler from "../../../lib/getValueChangerHandler";

function AdditionalFilter({ className, filterValues, setFiltersValues }) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const openDropdownHandler = () => setDropdownVisibility(!dropdownVisibility);

  const [changeDateFromHandler, resetDateFromHandler] = getValueChangerHandler(
    filterValues,
    setFiltersValues,
    "dateFrom"
  );
  const [changeDateToHandler, resetDateToHandler] = getValueChangerHandler(
    filterValues,
    setFiltersValues,
    "dateTo"
  );
  const [changeSumFromHandler, resetSumFromHandler] = getValueChangerHandler(
    filterValues,
    setFiltersValues,
    "sumFrom"
  );
  const [changeSumToHandler, resetSumToHandler] = getValueChangerHandler(
    filterValues,
    setFiltersValues,
    "sumTo"
  );

  let statusesValue = Object.keys(filterValues.orderStatuses).filter(
    (el) => filterValues.orderStatuses[el]
  );
  if (
    statusesValue.length === 0 ||
    statusesValue.length === Object.keys(filterValues.orderStatuses).length
  ) {
    statusesValue = "Любой";
  } else {
    statusesValue = statusesValue.join(", ");
  }

  return (
    <div className={cn(styles.filter__additional, className)}>
      <div className={styles.filter__orderDate}>
        <Input
          label="Дата оформления"
          placeholder="dd.mm.yyyy"
          contentBefore="c"
          inputValue={filterValues.dateFrom}
          setInputValue={changeDateFromHandler}
          resetInputValue={resetDateFromHandler}
        />
        <Input
          placeholder="dd.mm.yyyy"
          contentBefore="по"
          inputValue={filterValues.dateTo}
          setInputValue={changeDateToHandler}
          resetInputValue={resetDateToHandler}
        />
      </div>

      <div className={styles.filter__orderStatus}>
        <Input
          inputValue={statusesValue}
          label="Статус заказа"
          button={
            <Button
              className={cn({ [styles.flipped]: !dropdownVisibility })}
              icon="arrow"
              onClick={openDropdownHandler}
            />
          }
        />
        <div>
          <div
            className={cn(styles.dropdownWrapper, {
              [styles.dropdownWrapper_unvisible]: !dropdownVisibility,
            })}
          >
            <OrderMulipleStatusSelector
              filterValues={filterValues}
              setFiltersValues={setFiltersValues}
              setDropdownVisibility={setDropdownVisibility}
            />
          </div>
        </div>
      </div>

      <div className={styles.filter__orderSum}>
        <Input
          label="Сумма заказа"
          placeholder="&#8381;"
          contentBefore="от"
          inputValue={filterValues.sumFrom}
          setInputValue={changeSumFromHandler}
          resetInputValue={resetSumFromHandler}
        />
        <Input
          placeholder="&#8381;"
          contentBefore="до"
          inputValue={filterValues.sumTo}
          setInputValue={changeSumToHandler}
          resetInputValue={resetSumToHandler}
        />
      </div>
    </div>
  );
}

export default AdditionalFilter;
