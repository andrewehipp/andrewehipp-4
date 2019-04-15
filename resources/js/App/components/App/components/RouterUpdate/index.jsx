import React from 'react';
import { withRouter } from 'react-router';


class RouterUpdate extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}


export default withRouter(RouterUpdate);
