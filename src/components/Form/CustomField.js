import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  input,
  textarea {
    width: 100%;
    border: none;
    padding: 26px 10px 12px 10px;
    background-color: transparent;
    border-bottom: solid 2px
      ${({ error }) =>
        error.error && error.touched ? 'red' : 'rgba(255,255,255, 0.2)'};
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    &:focus {
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
    top: 20px;
    left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ error }) => (error.error && error.touched ? 'red' : '#fff')};
    transition: all 0.3s ease;
    pointer-events: none;
    &.focused {
      top: 4px;
      left: 0px;
      font-size: 13px;
      color: ${({ theme, error }) =>
        error.error && error.touched ? 'red' : theme.primaryColor};
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
