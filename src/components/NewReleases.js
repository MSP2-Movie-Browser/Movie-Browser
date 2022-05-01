import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Badge, Card } from "react-bootstrap"


function NewReleases() {

    const [movieData, setMovieData] = useState([])

    // function to retrieve list of new movies from server via api
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/movie/new_releases')
            const resData = await response.json()
            setMovieData(resData.results)
        }
        fetchData()
    }, [])

    const nowPlaying = movieData.map((movie, i) => {
        let str = movie.release_date
        let res = str.substring(5, 10) + "-" + str.substring(0, 4)
        return (

            <Link to={`movie/${movie.id}`} key={i}>
                <Card style={{ width: '18rem' , margin: '2em', textAlign: 'center'}}
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{ width: '18em'}} />
                    <Card.Body>
                        <Card.Title>{movie.original_title}</Card.Title>
                        <Card.Text>{res}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        )
    })

    return (
        <div>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Now Playing</h2>
            </Badge>
            <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
                {movieData.length > 0 ? nowPlaying : <h2>Loading...</h2>} 
            </div>
        </div>
    )
}

export default NewReleases