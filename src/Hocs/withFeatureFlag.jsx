import React, { Component } from 'react';

const withFeatureFlag = (WrappedComponent) =>
  class withFeatureFlag extends Component {
    render() {
      const { featured, ...restProps } = this.props;
      return featured ? <WrappedComponent {...restProps} /> : null;
    }
  }

export default withFeatureFlag;
