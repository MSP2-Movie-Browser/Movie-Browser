import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Badge, Card } from "react-bootstrap"


function ReviewView() {
    
    const [reviewData, setReviewData] = useState([])
    // const { id } = useParams()

   
    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch(`/review/${id}`)
            const response = await fetch('/review/new')
            const resData = await response.json()
            setReviewData(resData.review)
        }
        fetchData()
    }, [])

    const review = reviewData.map((review, i) => {
        // let str = review.avatar_path
        // const res = str !== undefined ? str.substring(0) : " "
        return (
            <Link to={'/my-reviews'}>
                <Card style={{ width: '80rem' , margin: '2em'}} key={i}>
                    {/* <Card.Img variant="top" src={res} alt={review.results} style={{ width: '18em'}} /> */}
                    <Card.Body>
                        <Card.Title>{review.author}</Card.Title>
                        <Card.Text>{review.movieTitle}</Card.Text>
                        <Card.Text>{review.content}</Card.Text>
                        {/* <Card.Text>{res}</Card.Text> */}
                    </Card.Body>
                </Card>
            </Link>
        )
        })
    

        return (
            <div>
                    <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
                        {reviewData.length > 0 ? review : <h2>Loading...</h2>} 
                    </div>
            </div>
        );
        
    }

    // return (
    //     <div>
    //         {/* <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
    //             <h2>Reviews</h2>
    //         </Badge> */}
    //         <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
    //             {reviewData.length > 0 ? review : <h2>Loading...</h2>} 
    //         </div>
    
    //         {/* <form>
    //             <label>
    //                 <input type="text" placeholder="Add review..."
    //                 ></input>
    //             </label>
    //             <input type="submit" value="Submit" />
    //         </form> */}
    //     </div>
	// );
   


export default ReviewView


// import { useEffect, useState } from "react"
// import { Link, useParams } from "react-router-dom"
// import { Badge, Card } from "react-bootstrap"


// function Reviews() {

//     // function to return list of reviews from server
//     // const [movieData, setMovieData] = useState([])
//     const [reviewData, setReviewData] = useState([])
//     const { id } = useParams()

    // useEffect(() => {
    //     // const API_URL = `http://localhost:4000/movie/${id}`
    //     const fetchData = async () => {
    //         const response = await fetch(`/movie/${id}`)
    //         const resData = await response.json()
    //         setMovieData(resData)
    //     }
    //     fetchData()
    // }, [id])
    

    // function to retrieve list of new movies from server via api
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(`/review/${id}`)
//             // const response = await fetch('/review/new')
//             const resData = await response.json()
//             setReviewData(resData.results)
//         }
//         fetchData()
//     }, [id])

//     const review = reviewData.map((review, i) => {
//         let str = review.avatar_path
//         const res = str !== undefined ? str.substring(0) : " "
//         return (
//             <Link to={`review/${review.id}`}>
//                 <Card style={{ width: '80rem' , margin: '2em'}} key={i}>
//                     <Card.Img variant="top" src={res} alt={review.results} style={{ width: '18em'}} />
//                     <Card.Body>
//                         <Card.Title>{review.author}</Card.Title>
//                         <Card.Text>{review.content}</Card.Text>
//                         {/* <Card.Text>{res}</Card.Text> */}
//                     </Card.Body>
//                 </Card>
//             </Link>
//         )
        
//     })

//     return (
//         <div>
//                 <div style={{ display: 'flex' , flexDirection: 'row' , flexWrap: 'wrap' }}>
//                     {reviewData.length > 0 ? review : <h2>Loading...</h2>} 
//                 </div>
//                 <Badge bg="danger" style={{ width: '90%', margin: '2em' }}>
//                     <h2>Add a Review</h2>
//                 </Badge>
//         </div>
// 	);
   
// }