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
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClearHistory = this.handleClearHistory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }
    handleClearHistory() {
        localStorage.removeItem('searchHistory');
    }
    handleChange() {
        const searchText = this.refs.searchInput.value;
        this.setState({ searchText })
    }
    handleHover(e) {
        this.setState({ hover: true });
    }
    handleSelect(e) {
        let select = e.target.value='';
        console.log(select);
    }
    handleFocus() {
        this.setState({ onFocus: true });
    }
    handleBlur() {
        this.setState({ onFocus: false });
    }
    handleSearch() {
        // 判断非空
        const searchText = this.refs.searchInput.value;
        if (searchText === '') {
            return;
        }
        // 搜索记录存入 storage;
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
        if (!searchHistory) {
            searchHistory = { search: [] };
        }
        searchHistory.search.push(searchText);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        console.log(searchHistory);
        // this.setState({ clear: true });
        // this.props.history.push()
    }
    componentDidMount() {
        this.refs.searchInput.focus();
    }
    render() {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
        searchHistory = searchHistory ? searchHistory.search : null;
        const { onFocus, searchText, hover } = this.state;
        const history = searchHistory ? searchHistory.map((value, i) => (
            <MyLi key={i} deleteHistoryHandler={() => { console.log('deleting...') }}>
                <span onClick={this.handleSelect} >{value}</span>
                {/* {hover && <span className='search-delete'>删除</span>} */}
            </MyLi>
        ))
            : null;
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
                        {history}
                        {/* {history &&
                            <li>
                                <p className='search-clear' onClick={this.handleClearHistory}>清除全部历史记录</p>
                            </li>
                        } */}
                        <MyLi className='search-clear'>大时代</MyLi>
                    </ul>}
                </div>
            </div>
        )
    }
}
export default withRouter(Search);