import React , { useEffect , useState } from 'react'

import axios from 'axios'

//icons

import { BsStarFill , BsStarHalf , BsStar } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

const ViewScreen = () => {

    let { url } = useParams();

    let [ movdata , setMovData] = useState([]);

    useEffect(()=>{

        fetchMovie();

    } ,[])

    const fetchMovie = async() => {
        await axios.get('https://wookie.codesubmit.io/movies?q='+url,
        { 
            headers: {
            'Authorization': `Bearer Wookie2019`
            }
        })
            .then((res) => {
                setMovData(res.data.movies);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return(
        <div className="ViewContainer">
            <div className="container">
                {movdata.map((itm,k) => {

                    //as i didnt get time and didnt receive currect api im using this
                    if(itm.slug === url){
                        return(
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="imgViewer">
                                        <img src={ itm.backdrop } className="mvImagesvi"></img>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="contViewer row">
                                        <div className="col-md-8">
                                            <h3>{ itm.title }</h3>
                                            <span>{itm.released_on} || </span><span>{ itm.length } || </span><span>{ itm.director } </span>
                                        </div>
                                        <div className="col-md-4">
                                            <BsStarFill className="star" />
                                            <BsStarFill className="star" />
                                            <BsStarHalf className="star" />
                                            <BsStar className="star" />
                                            <BsStar className="star" />
                                        </div>
                                        <div className="col-md-12">
                                            <p className="details">{ itm.overview }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                
            </div>
        </div>
    )
}

export default ViewScreen