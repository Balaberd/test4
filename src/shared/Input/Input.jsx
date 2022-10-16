/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import Button from "../Button/Button";

function Input({
  inputValue,
  setInputValue,
  resetInputValue,
  isIncorrect,
  disabled,
  label,
  placeholder,
  contentBefore,
  className,
  button,
}) {
  let buttonElement;
  if (button) {
    buttonElement = button;
  } else if (disabled) {
    buttonElement = <Button disabled icon="locked" />;
  } else if (inputValue) {
    buttonElement = (
      <Button isShort icon="x-medium" onClick={resetInputValue} />
    );
  }
  return (
    <div
      className={cn(styles.customInput, className, {
        [styles.customInput_incorrect]: isIncorrect,
        [styles.customInput_disabled]: disabled,
      })}
    >
      <label className={styles.customInput__label}>
        {label}
        <div className={styles.customInput__wrapper}>
          {contentBefore && <span>{contentBefore}</span>}
          <input
            className={styles.customInput__input}
            placeholder={placeholder}
            value={inputValue}
            onChange={setInputValue}
            disabled={!!disabled}
          />
          {buttonElement}
        </div>
      </label>
    </div>
  );
}

export default Input;
