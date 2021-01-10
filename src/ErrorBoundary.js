import React from 'react';
import AlertErrorBoundary from '~/application/components/AlertErrorBoundary';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <AlertErrorBoundary />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
