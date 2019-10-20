import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const Header = (props) => {
  const { drawerToggleClick, items } = props;
  return (
    <header className={styles.Header}>
      {/* <div className={styles.Logo}>
        <Logo href="/" uri={logo} />
      </div> */}
      <div className={styles.MobileOnly}>
        <DrawerToggle clicked={drawerToggleClick} />
      </div>
      <nav className={styles.DesktopOnly}>
        {items}
      </nav>
    </header>
  );
};

Header.propTypes = {
  drawerToggleClick: PropTypes.func,
  items: PropTypes.node,
};

Header.defaultProps = {
  drawerToggleClick: () => {},
  items: null,
};

export default Header;
