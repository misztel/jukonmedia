import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import TabTitle from './TabTitle/TabTitle';
import TabHighlighter from './TabHighlighter/TabHighlighter';

const TabContent = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
`;

const StyledTab = styled.div`
  transition: all 0.3s linear;
  width: 100%;
`;

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  position: relative;
`;


const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2
    }
  },
  inactive: {
    display: "none"
  }
};

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
      {children.map((item, index) => (
        <TabContent
          key={index}
          variants={tabContentVariant}
          animate={index === currentTab ? "active" : "inactive"}
          initial="inactive" >
          {item}
        </TabContent>
      ))}
    </StyledTab>
  );
};

export default Tab;
