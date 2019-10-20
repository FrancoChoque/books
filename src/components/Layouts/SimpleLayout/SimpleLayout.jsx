import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../Navigation/Footer/Footer';
import Navbar from '../../Navigation/Navbar/Navbar';
import styles from './SimpleLayout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.Container}>
      <Navbar />
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
