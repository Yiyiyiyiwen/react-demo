import React, { Component } from "react"
import search from "./images/search.png"
import "./SearchBox.css"
import SearchResult from "./SearchResult"
import { get } from "./utils/request";
import { baseurl } from "./utils/request"

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data:[]
        };

        this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    handleSearchTextInput(searchText) {
        this.setState({
            searchText: searchText
        });
        console.log(this.state.searchText)
    }

    handleSearch() {
        get(baseurl + "/searchMusic?name=" + this.state.searchText).then(data => {
            this.setState({data: data.result });
        })
        
    }

    render() {
        return (
            <div className="searchcontainer">
                <SearchInput
                    searchText={this.state.searchText}
                    onSearchTextInput={this.handleSearchTextInput}
                    onSearch = {this.handleSearch}
                />
                <SearchResult
                    searchText={this.state.searchText}
                    data = {this.state.data}
                />
            </div>

        )
    }
}
class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onKeyUp(e){
        if(e.keyCode === 13){
            //this.handleSearchTextInputChange(e)
            this.props.onSearch(e.target.value);
        }
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
                        onKeyUp={this.onKeyUp}
                        onChange={this.handleSearchTextInputChange}
                    />
                </div>
 
            </div>

        );
    }
}


export default SearchBox