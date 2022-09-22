import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValueTouched, setisValueTouched] = useState(false);

  const ValueIsValid = validateValue(enteredValue);
  const hasError = !ValueIsValid && isValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setisValueTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setisValueTouched(false);
  }
  return {
    value: enteredValue,
    isValid : ValueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;
