import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  const { children, link } = props;
  return (
    <li className={styles.NavigationItem}>
      <NavLink to={link} activeClassName={styles.active} exact>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
};

NavigationItem.defaultProps = {
  link: '',
  children: null,
};

export default NavigationItem;
