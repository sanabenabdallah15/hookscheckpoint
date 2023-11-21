import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
const AddMovieForm = ({ onAddMovie}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [Title, setTitle] = useState('');
    const [Rating, setRating] = useState('');
    const [Description, setDescription] = useState('');
    const [Poster,setPoster]=useState('');
    const [id,setid]=useState('');
    const[videoLink,setvideoLink]=useState('')

    const navigate = useNavigate();
   

    const handleClick = () => {
      setIsModalOpen(!isModalOpen)
  }


    const handleSubmitt = (e) => {
      e.preventDefault();
 
    
      // Create a movie object with the input data
      const newMovie = {
        Title,
        Rating,
        Description,
        Poster,
        id,
        videoLink
      };

  
      // Call the parent component's function to add the movie
      onAddMovie(newMovie);
  
      // Clear the form fields
      setTitle('');
      setRating('');
      setDescription('');
      setPoster('');
      setid(' ');
      setvideoLink(' ');
      handleClick()

      navigate("/");
      console.log("saanaaaaaaa")
    };
    
   
    return (
      <>
      <button className='button' onClick= {()=>handleClick()} >Add Movie</button>
      
      <Modal
      isOpen={isModalOpen}
    
       
      >
    <div className='center'>
      <form >
   
        <label >
          <h1>Title:</h1>
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className='input'/>
        </label>
        <br />
        <label>
          <h1>Rating:</h1>
          <input type="text" value={Rating} onChange={(e) => setRating(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1> Description:</h1>
          <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1>Poster:</h1>
        <input type='src' value={Poster} onChange={(e) => setPoster(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1>videoLink:</h1>
        <input type='src' value={videoLink} onChange={(e) => setvideoLink(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1>id:</h1>
        <input type='src' value={id} onChange={(e) => setid(e.target.value)}  className='input'/>
        </label>
        <br />
 
      </form>
      <button  className='button2' onClick={(e)=>handleSubmitt(e)} >Add A Movie</button>
       
      </div>
      </Modal>
      </>
    );
  };
  
  export default AddMovieForm;