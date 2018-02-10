import React from 'react'

export default (WrappedComponent) => {
    class newComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hover: false };
            this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
            this.onMouseLeaveHander = this.onMouseLeaveHander.bind(this);
        }
        onMouseEnterHandler() {
            this.setState({ hover: true });
        }
        onMouseLeaveHander() {
            this.setState({ hover: true });
        }

        render() {
            return (
                <span onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHander}>
                    <WrappedComponent isHover={this.state.hover} />
                </span>
            )
        }
    }
    return newComponent;
}