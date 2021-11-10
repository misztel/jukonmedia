import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const TextareaWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  textarea {
    width: 100%;
    resize:none;
    height:100px;
    border: none;
    padding: 26px 10px 12px 10px;
    background-color: transparent;
    border-bottom: solid 2px
      ${({ error, theme }) =>
    error.error && error.touched ? theme.infoColor.danger : theme.neutralColor.textPrimary};
    color: ${({ theme }) => theme.neutralColor.textPrimary};
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    &:focus {
     border-color: ${({ theme, error }) =>
    error.error && error.touched ? theme.infoColor.danger : theme.accentColor.primaryColor};
      outline: none;
    }
    &.error {
      border-color: ${({ theme }) => theme.infoColor.danger};
    }
  }
  .placeholder {
    position: absolute;
    top: 20px;
    left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ error, theme }) => (error.error && error.touched ? theme.infoColor.danger : theme.neutralColor.textPrimary)};
    transition: all 0.3s ease;
    pointer-events: none;
    &.focused {
      top: 4px;
      left: 0px;
      font-size: 13px;
      color: ${({ theme, error }) =>
    error.error && error.touched ? theme.infoColor.danger : theme.accentColor.primaryColor};
    }
  }
  span.error {
    position: absolute;
    top: 48px;
    left: 10px;
    font-size: 14px;
    line-height: 14px;
    color: ${({ theme }) => theme.infoColor.danger};
    text-align: left;
  }
`;

export default function Textarea(props) {
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
    <TextareaWrap error={meta}>
      <textarea
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
    </TextareaWrap>
  );
}
