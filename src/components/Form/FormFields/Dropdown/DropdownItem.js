import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`
const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 11px;
`

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 17px;
  background: ${({ checked, theme }) => checked ? theme.accentColor.primary : theme.neutralColor.textPrimary};
  border-radius: 20px;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.accentColor.secondary};
  }
  ${Icon} {
    opacity: ${props => props.checked ? 1 : 0}
  }
`
const StyledLabel = styled.span`
  margin-left: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.neutralColor.textPrimary};
`

const Item = styled.div`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
`;

const DropdownItem = ({ id, name, checkChange, ...props }) => {
  const [isCheck, setCheck] = useState(false);

  const changeHandler = (name) => {
    checkChange(name);
    setCheck(!isCheck)
  }
  return (
    <Item>
      <label>
        <CheckboxContainer>
          <HiddenCheckbox checked={isCheck} {...props} onChange={() => changeHandler(name)} />
          <StyledCheckbox checked={isCheck}>
            <Icon icon={faCheck} />
          </StyledCheckbox>
        </CheckboxContainer>
        <StyledLabel>{name}</StyledLabel>
      </label>
    </Item>
  );
};

export default DropdownItem;
