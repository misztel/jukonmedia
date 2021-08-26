import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  input,
  textarea {
    width: 100%;
    border: none;
    padding: 26px 10px 12px 10px;
    background-color: #253045;
    border-radius: 5px;
    border: solid 2px
      ${({ error }) => (error.error && error.touched ? 'red' : '#253045')};
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;
    &:focus {
      border: solid red 2px;
      border-color: ${({ theme, error }) =>
    error.error && error.touched ? 'red' : theme.primaryColor};
      outline: none;
    }
    &.error {
      border-color: #e03030;
    }
  }
  .placeholder {
    position: absolute;
    top: 22px;
    left: 10px;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    transition: all 0.3s ease;
    pointer-events: none;
    &.focused {
      top: 8px;
      left: 10px;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  span.error {
    position: absolute;
    top: 48px;
    left: 10px;
    font-size: 14px;
    line-height: 14px;
    color: #e03030;
    text-align: left;
  }
`;

export default function CustomField(props) {
  const [field, meta] = useField(props);
  const [isFocused, onFocus] = useState(false);

  function handleFocus() {
    onFocus(true);
  }

  function handleBlur(e) {
    field.onBlur(e);

    if (!field.value.length > 0) {
      onFocus(false);
    }
  }

  return (
    <InputWrap error={meta}>
      <input
        {...field}
        {...props}
        onFocus={handleFocus}
        onBlur={e => handleBlur(e)}
      />
      {/* {meta.error && meta.touched && (
        <span className="error">{meta.error}</span>
      )} */}
      <span className={`placeholder${isFocused ? ' focused' : ''}`}>
        {props.customplaceholder}
      </span>
    </InputWrap>
  );
}
