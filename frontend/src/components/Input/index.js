import React, { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';

import { useField } from '@unform/core';

export default function Input({ name, label, mask, ...rest }) {
  const inputRef = useRef(null);
  const { registerField, fieldName, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
 
  return (
    <>
      {label && <label>{label}</label>}
      
      <InputMask mask={mask} ref={inputRef} defaultValue={defaultValue} {...rest} />
    </>
  );
}