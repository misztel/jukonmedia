import React, { useState } from 'react';
import styled from 'styled-components';

import TabTitle from './TabTitle/TabTitle';
import TabHighlighter from './TabHighlighter/TabHighlighter';

const StyledTab = styled.div`
  width: 100%;
  transition: all 0.3s linear;
`;

const TabNav = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

const Tab = ({ children }) => {
  const [currentTab, setTab] = useState(0);

  return (
    <StyledTab>
      <TabNav>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            currentTab={currentTab}
            setTab={setTab}
          />
        ))}
        <TabHighlighter index={currentTab} />
      </TabNav>
      {children[currentTab]}
    </StyledTab>
  );
};

export default Tab;
