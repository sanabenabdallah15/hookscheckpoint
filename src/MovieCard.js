
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
function MovieCard({el}) {
    const {Title,Description,Poster,Rating}=el
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Poster} />
        <Card.Body>
          <Card.Title style={{fontSize:35}}>{Title}</Card.Title>
          <Card.Text style={{fontSize:25}}>
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