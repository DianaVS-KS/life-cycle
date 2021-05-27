import React, { Component } from 'react';

class ErrorHandler extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // logging the error details
        console.log(`Cause: ${error}.`);
    }

    render() {
        if (this.state.hasError) {
            return <h3 style={{ 'text-align': 'center' }}>Unfortunately, something went wrong.</h3>;
        }

        return this.props.children;
    }
}

export default ErrorHandler;