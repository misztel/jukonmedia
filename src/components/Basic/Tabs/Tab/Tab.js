import React from 'react';
import { motion } from 'framer-motion';

import Col from '../../Col';
import Row from '../../Row';

const cardVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};

const Tab = ({ children }) => {
  let items = React.Children.toArray(children);

  return (
    <Row>
      {items.map((item, index) => {
        return (
          <Col
            md={12}
            style={{ marginBottom: '25px' }}
            as={motion.div}
            key={index}
            variants={cardVariant}>
            {React.cloneElement(item)}
          </Col>
        )
      })}
    </Row>
  );
};

export default Tab;
