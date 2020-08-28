import React from 'react'
import Airlines from './Airlines/Airlines'
import Airline from './Airlines/Airline'
import { Route, Switch } from "react-router-dom"

const App = () => {
    return (
    <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
    )
}

export default App;
