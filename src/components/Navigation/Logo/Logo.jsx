import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

const Logo = (props) => {
  const { href, uri } = props;
  return (
    <div className={styles.Logo}>
      <a href={href}>
        <img
          src={require(`../../../../public/${uri}`)}
          alt={uri}
        />
      </a>
    </div>
  );
};

Logo.propTypes = {
  alt: PropTypes.bool,
  href: PropTypes.string,
  uri: PropTypes.string,
};

Logo.defaultProps = {
  alt: false,
  href: '/',
  uri: '',
};

export default Logo;
