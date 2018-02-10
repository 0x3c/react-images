import React from 'react'
// import withHover from 'components/withHover'
import './myli.less'

class MyLi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }
    onMouseEnterHandler() {
        this.setState({ hover: true });
    }
    onMouseLeaveHandler() {
        this.setState({ hover: false });
    }
    render() {
        const content = React.Children.map(this.props.children, (item) => (
            item
        ))
        const { hover } = this.state;
        return (
            <li onMouseLeave={this.onMouseLeaveHandler} onMouseEnter={this.onMouseEnterHandler} className={this.props.className}>
                {content}
                {hover && <span className='search-delete' onClick={this.props.deleteHistoryHandler}>删除</span>}
            </li>
        )
    }
}
export default MyLi;