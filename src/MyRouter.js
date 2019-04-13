import { BrowserRouter, Route } from 'react-router-dom'
import React from "react";
//import { Route, Redirect } from 'react-router'

class HomePage extends React.Component{
    render(){
        return(
            <div>Home Page</div>
        )
    }
}


class UsersPage extends React.Component{
    render(){
        return(
            <div>Users Page</div>
        )
    }
}

class PrimaryLayout extends React.Component{
    render(){
        return(
            <div className="primary-layout">
            <header>
                Our React Router 4 App
          </header>
            <main>
                <Route path="/router" component={HomePage} />
                <UsersPage></UsersPage>
            </main>
        </div>
        )
    }
}
class MyRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <PrimaryLayout />
            </BrowserRouter>
        )
    }
}


export default MyRouter;