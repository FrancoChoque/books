import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {
  const { children } = props;
  return (
    <ul className={styles.NavigationItems}>
      {children}
    </ul>
  );
};

NavigationItems.propTypes = {
  children: PropTypes.node,
};

NavigationItems.defaultProps = {
  children: null,
};

export default NavigationItems;
