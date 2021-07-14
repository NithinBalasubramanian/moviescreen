import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

//link

import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="navHeader">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Link to="/">
                            <h1 className="logoTitle">WOOKIES MOVIES</h1>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="searchBar">
                            <input type="text" placeholder="Search"></input>
                            <BiSearchAlt2 size='30px' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar