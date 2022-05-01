import { useEffect, useState } from "react"
import { Badge, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

function ActorView() {
    const { id } = useParams()
    const [actorData, setActorData] = useState([])
    const [filmData, setFilmData] = useState([])

    // Get actor data from API
    useEffect(() => {
        // const API_URL = `http://localhost:4000/person/${id}`
        const fetchData = async () => {
            const response = await fetch(`/actor/${id}`)
            const resData = await response.json()
            setActorData(resData)
        }
        fetchData()
    }, [id])

    // Get actor filmography from API
    useEffect(() => {
        // const API_URL = `http://localhost:4000/person/${id}/credits`
        const fetchData = async () => {
            const response = await fetch(`/actor/filmography/${id}`)
            const resData = await response.json()
            setFilmData(resData.cast)
        }
        fetchData()
    }, [id])

    const filmography = filmData.map((film, i) => {
        const str = film.release_date
        const res = str !== undefined ? str.substring(0, 4) : " "
        return (
            <div key={i}>
                <Link to={`/movie/${film.id}`}>
                    <Card style={{ width: '18rem' , margin: '2em', textAlign: 'center'}} key={i}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.original_title} style={{ width: '18em'}} />
                        <Card.Body>
                            <Card.Title>{film.original_title}</Card.Title>
                            <Card.Text>{res}</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>{actorData.name}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${actorData.profile_path}`} alt={actorData.name}></img>
            <p>{actorData.biography}</p>
            <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
                <h2>Filmography</h2>
            </Badge>
            <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
                {filmography}
            </div>
        </div>
    )
}

export default ActorView