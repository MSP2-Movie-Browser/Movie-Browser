import { useEffect, useState } from "react"
import { Badge, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Reviews from './Reviews';
import SubmitReview from "./SubmitReview";
import ReviewView from "./ReviewView";

function MovieView() {
    const { id } = useParams()
    const [movieData, setMovieData] = useState([])
    const [castData, setCastData] = useState([])

    // Get movie data from API
    useEffect(() => {
        // const API_URL = `http://localhost:4000/movie/${id}`
        const fetchData = async () => {
            const response = await fetch(`/movie/${id}`)
            const resData = await response.json()
            setMovieData(resData)
        }
        fetchData()
    }, [id])

    // Get cast from API
    useEffect(() => {
        // const API_URL = `http://localhost:4000/movie/${id}/credits`
        const fetchData = async () => {
            const response = await fetch(`/movie/cast/${id}`)
            const resData = await response.json()
            console.log(resData)
            setCastData(resData.cast)
        }
        fetchData()
    }, [id])

    const cast = castData.map((actor, i) => {
        // const image = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        // const resImage = actor.profile_path === null ? " " : image
        const resActor = actor.profile_path === null ? " " : 
        <div key={i}>
        <Link to={`/actor/${actor.id}`}>
            <Card style={{ width: '18rem' , margin: '2em'}} key={i}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: '18em'}} />
                {/* <Card.Img variant="top" src={resImage} /> */}
                <Card.Body>
                    <Card.Title>{actor.name} as {actor.character}</Card.Title>
                    {/* {resActor} */}
                </Card.Body>
            </Card>
        </Link>
    </div>

    return (
        <div key={i}>
            <Link to={`/actor/${actor.id}`}>
                <Card style={{ width: '18rem' , margin: '2em', textAlign: 'center'}} key={i}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: '18em'}} />
                    {/* <Card.Img variant="top" src={resImage} /> */}
                    <Card.Body>
                        <Card.Title>{actor.name} as {actor.character}</Card.Title>
                        {/* {resActor} */}
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
        //     <div key={i}>
        //         <Link to={`/actor/${actor.id}`}>
        //             <Card style={{ width: '18rem' , margin: '2em'}} key={i}>
        //                 <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{ width: '18em'}} />
        //                 {/* <Card.Img variant="top" src={resImage} /> */}
        //                 <Card.Body>
        //                     <Card.Title>{actor.name} as {actor.character}</Card.Title>
        //                     {/* {resActor} */}
        //                 </Card.Body>
        //             </Card>
        //         </Link>
        //     </div>
        
    })

    const str = movieData.release_date;
    const res = str !== undefined ? str.substring(0, 4) : " "
    const image = <img src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`} alt={movieData.original_title}></img>
    const resImage = movieData.backdrop_path === null ? " " : image
    return (
        <div>
            <h1>{movieData.original_title}</h1>
            <h4>{res}</h4>
            {resImage}
            <p>{movieData.overview}</p>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Cast</h2>
            </Badge>
            <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
                {cast}
            </div>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Reviews</h2>
            </Badge>
            <Reviews />
            {/* <ReviewView /> */}
            <SubmitReview />
        </div>
    )
}

export default MovieView;
