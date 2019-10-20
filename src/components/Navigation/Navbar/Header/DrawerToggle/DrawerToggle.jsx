import React from 'react';
import PropTypes from 'prop-types';
import styles from './DrawerToggle.module.css';

const DrawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div onClick={clicked} role="presentation" className={styles.DrawerToggle}>
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.propTypes = {
  clicked: PropTypes.func,
};

DrawerToggle.defaultProps = {
  clicked: () => {},
};

export default DrawerToggle;
