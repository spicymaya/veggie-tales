import React from "react";
export default class DefaultErrorBoundry extends React.Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError = () => {
    return { isError: true };
  };

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <div>Somethign went wrong!</div> : children;
  }
}
