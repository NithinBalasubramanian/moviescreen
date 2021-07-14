import React , { useEffect , useState } from 'react'
import HorizontalSlider from 'react-horizontal-slider'

//pages

import ListSlidePart from './ListSlidePart'

import axios from 'axios'

const HomeList = () => {

    let [ data , setData ] = useState([]);

    useEffect(() =>{

        fetchData();
        
    },[])

    const fetchData = async () => {

        await axios.get('https://wookie.codesubmit.io/movies',
                { 
                    headers: {
                    'Authorization': `Bearer Wookie2019`
                    }
                }
                )
            .then( res => {
                //console.log(res.data.movies);
                setData(res.data.movies);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return(
        <div className="homeContent">
            <div className="categoryMovieListed">
                <div className="categoryHeading">
                    <h4>Category</h4>
                </div>
                <div className="horSlide">
                    { data.map((itm,k) => {
                        return(
                            <ListSlidePart itms={ itm } key={k} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeList