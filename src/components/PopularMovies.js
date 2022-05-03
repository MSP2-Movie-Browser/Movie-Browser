import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";

function PopularMovies() {
  const [movieData, setMovieData] = useState([]);
  // retrieve list of trending movies from server via api
  useEffect(() => {
    const API_URL = "http://localhost:3001/movie/popular";
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setMovieData(resData.results);
    };
    fetchData();
  }, []);

    const [movieData, setMovieData] = useState([])

    // function here to retrieve list of trending movies from server via api
    useEffect(() => {
        // const API_URL = 'http://localhost:3005/movie/popular'
        const fetchData = async () => {
            const response = await fetch('/movie/popular')
            const resData = await response.json()
            setMovieData(resData.results)
        }
        fetchData()
    }, [])

    const popularMovies = movieData.map((movie, i) => {
        return (
            <Link to={`movie/${movie.id}`}>
                <Card style={{ width: '18rem' , margin: '2em', textAlign: 'center'}} key={i}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{ width: '18em'}} />
                    <Card.Body>
                        <Card.Title>{movie.original_title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        )
    })

    return (
      <Link to={`movie/${movie.id}`} key={i}>
        <Card style={{ width: "18rem", margin: "2em" }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            style={{ width: "18em" }}
          />
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    );
  });

  return (
    <div>
      <Badge bg="danger" style={{ width: "90%", margin: "2em" }}>
        <h2>Trending</h2>
      </Badge>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {movieData.length > 0 ? popularMovies : <h2>Loading...</h2>}
      </div>
    </div>
  );
}

export default PopularMovies;
