import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import PostList from "./PostList";
import Header from "./header";
import Guide from "./guide"
import Hot from "./Hot"
import Broadcasting from "./Broadcasting"
import Channel_public_detail from "./Channel_public_detail"



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: sessionStorage.getItem("username")
        }
    }

    render() {
        const { username } = this.state;
        const { location, match } = this.props;

        return (
            <div>
                <Header username={username} location={location} />
                <Router>
                    <Guide />
                    <Route exact path="/" component={PostList} />
                    <Route path="/hot" component={Hot} />
                    <Route exact path="/broadcast" component={Broadcasting}/>
                    <Route path="/broadcast/:id" component={Channel_public_detail} /> 
                    <Route path="/topics" component={Topics} />
                    
                </Router>
            </div>

        )
    }
}


const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default Home