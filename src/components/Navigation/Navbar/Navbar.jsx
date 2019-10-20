import React, { Component } from 'react';
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
    return (
      <div className={styles.Container}>
        <Header drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          opened={showSideDrawer}
          toggle={this.sideDrawerToggleHandler}
        />
      </div>
    );
  }
}

export default Navbar;
