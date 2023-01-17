import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import Mod from './Mod';
import { Navbar } from 'react-bootstrap';


function Movies({text, rate}) {
    const [List, setList] = useState([
      {
        name: "The Godfather",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_UX477_CR0,0,477,268_AL_.jpg",
        description:
          "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel.",
        rating: 5,
      },
      {
        name: "Taxi Driver",
        posterurl:
          "https://www.indiewire.com/wp-content/uploads/2016/04/taxi-driver-1.jpg?w=670&h=377&crop=1",
        description:
          "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute.",
        rating: 3,
      },
      {
        name: "Fight Club",
        posterurl:
          "https://img.huffingtonpost.com/asset/5bb49916220000ba01dc2840.jpeg?ops=scalefit_630_noupscale",
        description:
          "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman.",
        rating: 5,
      },
      {
        name: "The Lord of the Rings",
        posterurl:
          "https://imgix.bustle.com/uploads/image/2020/1/21/7f69561d-3863-4b82-8196-f6bfd3074f03-lord-of-the-rings-frodo-sam-ftr.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        description:
          "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien.",
        rating: 5,
      },
    
      {
        name: "Dachra",
        posterurl:
          "https://cdn.nawaat.org/wp-content/uploads/2018/11/DACHRA-3-2000px.jpg",
        description:
          "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal.",
        rating: 5,
      },
      {
        name: "Paper Lives",
        posterurl:
          "http://www.doyouknowturkey.com/wp-content/uploads/2021/02/C%CC%A7ag%CC%86atay-Ulusoy-is-acting-as-Mehmet-in-Kag%CC%86ittan-Hayatlar-Papar-Lives-Turkish-original-film-on-Netflix.jpg",
        description:
          "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially.",
        rating: 2,
      },
    ]);
  
  return (
    <div>
   <Mod List={List} setList={setList}/>
  <div className='ahmed' id="bb">
{List.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&&el.rating>=rate).map((el)=><Card style={{ width: '13rem',marginTop:'590px',height: '20rem'}}>
      <Card.Img variant="top" src={el.posterurl} style={{  height:"190px",minwidth:"100px", maxwidth:"220px",minheight:"100px", maxHeight:"203px" }} />
      <svg id="saf" xmlns="http://www.w3.org/2000/svg" color="rgb(109, 8, 8)" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/> </svg>
      <Card.Body>
        <Card.Title style={{color:"white", fontSize:"16px"}}>{el.name}</Card.Title>
        <Card.Text>
         {el.description}
         {el.rating}
         <div className='ime'>
<p>1h 30min</p>
      <ReactStars 
    count={4}
    size={18}
    value={3}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  ReactStars/>
      </div>
        </Card.Text>
      </Card.Body>
    </Card>)}
    <div className='rad'>
      <video id="video1" src='/video10.mp4' autoPlay muted></video>
      <p id='gg'>EVIL <span>DEAD </span>RISE</p>
      <p>A woman finds herself in a fight for her life when <br></br>an ancient book gives birth to bloodthirsty <br></br>demons that run amok in a Los Angeles apartment building.</p>
    </div>
    </div>
    </div>

  )
}

export default Movies
