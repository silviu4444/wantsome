import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";

const Input = ({id, label, setInputStateOnParent }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setIsTouched(true);

    setInputStateOnParent(id, {
      value: e.target.value,
      isValid,
      isTouched: true,
  })
  };

  // const onBlur = () => {
  //   setIsTouched(true);
  // };

  useEffect(() => {
    const isNotValid = value.length > 15;
    setIsValid(!isNotValid);
    // if (!isTouched) onBlur();

  });

  const classNameString = `${styles.input} ${
    !isValid && isTouched && value ? styles.error : "" 
  }`;

  return (
    <label for={id} className={styles.label}>
      {label}
    <input
      id={id}
      className={classNameString}
      type="text"
      value={value}
      onChange={onChange}
      // onBlur={onBlur}
    />
    </label>
  );
};

export default Input;
