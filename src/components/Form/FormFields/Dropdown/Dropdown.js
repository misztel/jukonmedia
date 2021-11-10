import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div`

`;

const DropdownTitle = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  color: ${({ theme }) => theme.neutralColor.textPrimary};
  transition: transform 0.2s ease;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.accentColor.primary};
  }
`;

const DropdownTitleIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const DropdownBody = styled.div`
  overflow: hidden;
  height: ${({ heightProp }) => heightProp + 'px'};
  transition: height 0.2s ease;
`;

const Dropdown = ({ title, children, multiSelect }) => {
  const [height, setHeight] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleHeight = () => {
    height === 0 ? setHeight(content.current.scrollHeight) : setHeight(0);
  }

  const content = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (height !== 0 && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setHeight(0)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [height])

  const handleCheckChange = (name) => {
    if (multiSelect) {
      if (checkedItems.includes(name)) {
        let arr = checkedItems.filter(item => item !== name);
        setCheckedItems(arr);
      } else {
        setCheckedItems(checkedItems => [...checkedItems, name]);
      }
    }
    else {
      let arr = [name];
      setCheckedItems(arr);
    }
  }

  return (
    <DropdownContainer ref={wrapperRef}>
      <DropdownTitle onClick={handleHeight}>
        {!checkedItems.length ? title : checkedItems.map(item => item)}
        <DropdownTitleIcon icon={faAngleDown} />
      </DropdownTitle>
      <DropdownBody ref={content} heightProp={height}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            checkChange: handleCheckChange
          })
        })}
      </DropdownBody>
    </DropdownContainer>
  );
};

export default Dropdown;
