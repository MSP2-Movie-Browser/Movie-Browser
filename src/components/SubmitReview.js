import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { Badge, Card } from "react-bootstrap"

const SubmitReview = () =>  {
    const url =""
    const [data, setData] = useState({
        movieTitle: "",
        author: "",
        content: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post('/review',{
            movieTitle: data.movieTitle,
            author: data.author,
            content: data.content
        })
        .then(res => {
            // console.log(res.data)
           window.location.reload(true)
        })

    }


    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    return (
        <div style={{marginLeft: '2em', marginTop: '2em', marginRight: '2em', marginBottom: '6em'}}>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) =>handle(e)} id="movieTitle" value={data.movieTitle} placeholder="Movie Title" type="text"></input>
                <input onChange={(e) =>handle(e)} id="author" value={data.author}placeholder="Author" type="text"></input>
                <input style={{width: '58em'}} onChange={(e) =>handle(e)} id="content" value={data.content}placeholder="Review" type="text"></input>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default SubmitReview
