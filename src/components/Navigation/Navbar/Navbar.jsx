import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import SideDrawer from './SideDrawer/SideDrawer';
import Header from './Header/Header';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {  
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;
    return (
      <div className={styles.Container}>
        <Header drawerToggleClick={this.sideDrawerToggleHandler}>
          {children}
        </Header>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          opened={showSideDrawer}
          toggle={this.sideDrawerToggleHandler}
        >
          {children}
        </SideDrawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node,
};

Navbar.defaultProps = {
  children: null,
};

export default Navbar;
