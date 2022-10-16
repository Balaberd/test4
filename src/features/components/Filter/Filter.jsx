import { React } from "react";
import cn from "classnames";
import styles from "./Filter.module.css";
import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Button";
import Icon from "../../../shared/Icon/Icon";
import getValueChangerHandler from "../../lib/getValueChangerHandler";

function Filter({
  filterValues,
  setFiltersValues,
  additionalFilterVisibility,
  setAdditionalFilterVisibility,
  className,
  children,
  resetAllFilterValues,
}) {
  const openFilterHandler = () =>
    setAdditionalFilterVisibility(!additionalFilterVisibility);

  const [changeSeachbarHandler, resetSeachbarHandler] = getValueChangerHandler(
    filterValues,
    setFiltersValues,
    "searchbar"
  );

  return (
    <div className={cn(styles.filter, className)}>
      <div className={cn(styles.filter__main, className)}>
        <div className={styles.filter__main__leftBlock}>
          <div className={styles.filter__main__inputWrapper}>
            <Input
              inputValue={filterValues.searchbar}
              setInputValue={changeSeachbarHandler}
              resetInputValue={resetSeachbarHandler}
              placeholder="Номер заказа или ФИО"
              contentBefore={<Icon type="search" />}
            />
          </div>
          <Button
            icon="filter"
            onClick={openFilterHandler}
            isFilled={additionalFilterVisibility}
          >
            Фильтры
          </Button>
          <Button onClick={resetAllFilterValues}>Сбросить фильтры</Button>
        </div>
        <div>
          <Button icon="refresh">Загрузка</Button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Filter;
