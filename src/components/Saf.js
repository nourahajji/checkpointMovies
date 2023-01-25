import { useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


function Saf() {    
  const [movies, setmovies] = useState([
    {
      name: "beasts of no nation",
      posterurl:
        "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQcsOKPBHHBH4i2JGy0OJI3l4blWwCHjoewRWeLWaZ_n6yzjtW56apfhfQcc2Pb2WGfEAs2Qgs71OA4oTEocr3LZTPcE.jpg?r=b78",
      description:
        "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
      rating: 5,
    },
    {
      name: "13 hours in benghazi",
      posterurl:
        "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRse3fgA3r6z5xMgjuVJlZlaXk8VKMNHxTV6f6_hcHVoTOwQka7dA48iui2uaWf77kkExQVywKkNVDwEB9T4Z9ofiTrl.jpg?r=44a",
      description:
        "A security team consisting of six members fights to defend an American diplomatic compound in Benghazi, Libya, against a wave of terrorist.",
      rating: 4,
    },
    {
      name: "The Circle",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could.",
      rating: 2,
    },
    {
      name: "Inception",
      posterurl:
        "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Inception-characters-film-crew.jpg",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing.",
      rating: 3,
    },
    {
      name: "Shutter Island",
      posterurl:
        "https://images.squarespace-cdn.com/content/v1/5b76c81055b02cf394f9ece5/1573132285768-0ALN9MWORAVTHBW7UBVI/ke17ZwdGBToddI8pDm48kNovdPSmLXrGMIo6NKEdEUEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcwA5BL7WQp-UtG0T9B_ANEONHo-Gj1DAsyRwVYWk8R2xfkNmKPWrmaFhthYewTpvH/Shutter%2BIsland%2B1.jpg?format=1000w",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient.",
      rating: 5,
    },
    {
      name: "Warcraft",
      posterurl:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-243610-8J07_WF0170_COMP_143639R_G_SRGB_000000_HR.jpg",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
      rating: 1,
    }
   
  ])
  return (
    <div className='hlil'>
      <h1>Séries</h1>
      <h1 id="glk">Kids</h1>
      {movies.map((el)=><Card id='ines' style={{ width: '13rem',marginTop:'691px',height: '20rem'}}>
      <Card.Img variant="top" src={el.posterurl} style={{height:"190px",minwidth:"50px", maxwidth:"50px",minheight:"50px", maxHeight:"300px" }} />
      <svg id="saf" xmlns="http://www.w3.org/2000/svg" color="rgb(109, 8, 8)" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/> </svg>
      <Card.Body>
        <Card.Title style={{color:"white", fontSize:"16px"}}>{el.name}</Card.Title>
        <Card.Text>
         {el.description}
         {el.rating}
         <div className="ime">
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
    </div>

  )
}

export default Saf
