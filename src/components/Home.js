import React from 'react'

//pages
import NavBar from './NavBar'
import HomeList from './HomeList'
import ViewScreen from './ViewScreen'

//router

import { BrowserRouter , Route , Switch } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <BrowserRouter>

            {/* navbar */}
            <NavBar />

            <Switch>
                <Route path='/' exact>
                    {/* Home Part */}
                    <HomeList />
                </Route>
                <Route path='/view/:url'>
                    {/* View screen */}
                    <ViewScreen />
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Home