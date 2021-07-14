import React ,{ useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListSlidePart = (itm ) => {

   
    let { backdrop , slug } = itm.itms;


    return(
            <Link to={`/view/${slug}`} className="SlideCard">
                <img src={ backdrop } className="mvImages"></img>
            </Link>
    )
}

export default ListSlidePart;