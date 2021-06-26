import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Chat from '../containers/Chat';
import Home from '../containers/Home';


class AppRouter extends React.Component{
    render(){
        return(
<Router>
    <Route exact path='/' component={Home}/>
    <Route exact path='/chat' component={Chat}/>
</Router>
        )
    }
}

export default AppRouter;