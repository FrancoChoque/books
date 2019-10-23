import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

export default (WrappedComponent) => {
  class Authenticate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false,
      };
    }
    
    checkAuthenticated = () => {
      return false;
    }

    render() {
      const { authenticated } = this.state;
      const content = authenticated ? <WrappedComponent /> : <Spinner />;
      return content;
    }
  }

  const mapStateToProps = (state) => ({

  });

  const mapDispatchToProps = (dispatch) => ({

  });

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
};
