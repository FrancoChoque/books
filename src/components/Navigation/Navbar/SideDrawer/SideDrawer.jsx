import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  const {
    closed, children, logo, opened,
  } = props;
  if (opened) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop show={opened} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        {/* <div className={styles.Logo}>
          <Logo href='/' uri={logo} />
        </div> */}
        <nav>
          {children}
        </nav>
      </div>
    </>
  );
};

SideDrawer.defaultProps = {
  opened: false,
  closed: null,
  children: null,
  logo: '',
};

SideDrawer.propTypes = {
  opened: PropTypes.bool,
  closed: PropTypes.func,
  children: PropTypes.node,
  logo: PropTypes.string,
};

export default SideDrawer;
