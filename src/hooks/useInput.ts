import React from 'react';
import { useState } from 'react';

type Response<T> = [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

const useInput = <T>(initialValue: T): Response<T> => {
  const [values, setValues] = useState(initialValue);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => setValues(initialValue);

  return [values, handleFieldChange, reset];
};

export default useInput;
