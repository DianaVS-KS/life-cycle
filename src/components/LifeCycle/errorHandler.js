import React, { Component } from 'react';

class ErrorHandler extends Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        // logging the error details
        this.setState({ hasError: true});
        console.log(`Cause: ${error}.`);
    }

    render() {
        if (this.state.hasError) {
            return <h3>Unfortunately, something went wrong.</h3>;
        }

        return this.props.children;
    }
}

export default ErrorHandler;