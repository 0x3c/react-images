import React from 'react'
import './search.less'
import { withRouter } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import MyLi from './HistoryItem'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clear: false,
            onFocus: false,
            searchText: '',
            hover: false,
            history: []
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClearHistory = this.handleClearHistory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.deleteOneHistory = this.deleteOneHistory.bind(this);
    }
    // 清楚历史
    handleClearHistory() {
        localStorage.removeItem('searchHistory');
    }
    // 绑定 input 状态
    handleChange() {
        const searchText = this.refs.searchInput.value;
        this.setState({ searchText })
    }
    handleHover(e) {
        this.setState({ hover: true });
    }
    // 选择历史记录复制到 搜索框
    handleSelect(e) {
        const select = e.currentTarget.textContent;
        this.setState({ searchText: select })
    }
    // 删除当前选择的历史记录
    deleteOneHistory(e) {
        const text = e.currentTarget.previousSibling.textContent;
        const { history } = this.state;
        const index = history.indexOf(text);
        history.splice(index, 1);
        this.setState({ history });
    }

    handleFocus() {
        this.setState({ onFocus: true });
    }
    handleBlur() {
        this.setState({ onFocus: false });
    }

    // 搜索
    handleSearch() {
        // 判断非空
        const searchText = this.refs.searchInput.value;
        if (searchText === '') {
            return;
        }
        const { history } = this.state;
        history.push(searchText);
        this.setState({ history });
        this.props.history.push({ pathname: `/search/key`, search: searchText, state: { req_col: searchText, req_title: searchText } });
    }
    componentWillMount() {
        // 设置 request_col
        const { handleInitUrl } = this.props;
        handleInitUrl('搜索');

        // 存入 localStorage中历史记录
        const searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
        if (searchHistory) {
            const history = searchHistory.search;
            this.setState({ history })
        }
    }
    componentDidMount() {
        // 聚焦到搜索框
        this.refs.searchInput.focus();
    }
    componentWillUnmount() {
        // 卸载前将 history 存入 localStorage
        console.log('卸载前存入 localStorage')
        const { history } = this.state;
        localStorage.setItem('searchHistory', JSON.stringify({ search: history }));
    }
    render() {
        const { onFocus, searchText, history } = this.state;

        const historyDOM = history.map((value, i) => (
            <MyLi key={i} deleteHistoryHandler={this.deleteOneHistory}>
                <span className='history-text' onClick={this.handleSelect} >{value}</span>
                {/* {hover && <span className='search-delete'>删除</span>} */}
            </MyLi>
        ))
        // console.log(onFocus)
        return (
            <div className="search">
                <div className="search-dialog">
                    <input type="text" className="search-input" ref='searchInput'
                        onChange={this.handleChange}
                        onFocus={this.handleFocus} value={searchText} />
                    <span className="search-btn" onClick={this.handleSearch}>
                        <FontAwesome name='search' />
                    </span>
                    {onFocus && <ul className="search-history">
                        {historyDOM}
                    </ul>}
                </div>
            </div>
        )
    }
}
export default withRouter(Search);