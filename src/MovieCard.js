import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import Movie from './Movie';
import { Link } from 'react-router-dom';


function MovieCard({el}) {
    const {id,Title,Description,Poster,Rating}=el
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
        <Link to={`/MoviePage/${id}`} >
          <Card.Title style={{fontSize:35}}>{Title}</Card.Title>
          </Link>
          <Card.Text style={{fontSize:25}}>
         
                      {Movie.Title}
                   
           {Description}
           
         
          </Card.Text>
        
          <ReactStars className='stars'
             count={5}
            value={Rating}
             size={30}
            color2={'#ffd700'} />
          <Button variant="primary" className='button3'>Download Film</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default MovieCard;