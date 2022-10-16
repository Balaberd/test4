/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from "classnames";
import React from "react";
import Checkbox from "../../../../shared/Chechbox/Checkbox";
import styles from "../Dropdown.module.css";

function OrderMulipleStatusSelector({ filterValues, setFiltersValues }) {
  const changeFilterStatuses = (status) =>
    setFiltersValues({
      ...filterValues,
      orderStatuses: {
        ...filterValues.orderStatuses,
        [status]: !filterValues.orderStatuses[status],
      },
    });
  return (
    <div className={cn(styles.dropdown, styles.dropdown_status)}>
      {Object.keys(filterValues.orderStatuses).map((el) => (
        <div
          className={cn(styles.dropdown__item, {
            [styles.dropdown__radio_checked]: filterValues.orderStatuses[el],
          })}
          onClick={() => changeFilterStatuses(el)}
        >
          <Checkbox checked={filterValues.orderStatuses[el]} />
          <span className={styles.dropdown__itemText}>{el}</span>
          <div className={styles.dropdown__item__upperLayer} />
        </div>
      ))}
    </div>
  );
}

export default OrderMulipleStatusSelector;
