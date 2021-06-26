import React from 'react'
import './App.css'
import Home from './containers/Home'
import AppRouter from './config/router';

class App extends React.Component{
    render(){
        return(
            <div>
<AppRouter />
            </div>
        )
    }
}

export default App;