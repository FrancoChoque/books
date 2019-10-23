import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../Navigation/Footer/Footer';
import Navbar from '../../Navigation/Navbar/Navbar';
import styles from './SimpleLayout.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.Container}>
      <Navbar>
        <NavigationItems>
          <NavigationItem link="/">Books</NavigationItem>
          <NavigationItem link="/signIn">Sign In</NavigationItem>
          <NavigationItem link="/signUp">Sign Up</NavigationItem>
          <NavigationItem link="/about">About</NavigationItem>
        </NavigationItems>
      </Navbar>
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
