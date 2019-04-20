import React, { Component } from "react"
import search from "./images/search.png"
import "./SearchBox.css"
import SearchResult from "./SearchResult"

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    }


    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText
        });
        console.log(this.state.searchText)
    }

    render() {
        return (
            <div className="searchcontainer">
                <SearchInput
                    searchText={this.state.searchText}
                    onSearchTextInput={this.handleSearchTextInput}
                />
                <SearchResult
                    searchText={this.state.searchText}
                />
            </div>

        )
    }
}
class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
    }

    handleSearchTextInputChange(e) {
        this.props.onSearchTextInput(e.target.value);
    }
    render() {
        return (
            <div>
                <div className="searchbox">
                    <div>
                        <img src={search}></img>
                    </div>
                    <input
                        type="text"
                        placeholder="搜索歌曲、歌手、专辑"
                        value={this.props.searchText}
                        onChange={this.handleSearchTextInputChange}
                    />
                </div>

            </div>

        );
    }
}


export default SearchBox