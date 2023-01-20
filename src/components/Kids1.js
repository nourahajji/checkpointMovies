import React from 'react'
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
function Kids1() {
    const [students, setstudent] = useState([
    
        { name:"The Boss baby ", age:"Seven-year-old Tim gets jealous when his parents give all their attention to his little brother. Tim soon learns .", img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoXtgMlVpiOtLWBSauHiGoZfQsMRVU3l4Ep2hJ8KDUEYqqFwMu"},
        { name: "Puss in Boots", age:"Puss teams up with his friends, Humpty Dumpty and Kitty Softpaws, in order to defeat two criminals, Jack and Jill.", img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTed4JfrwRd2DVjEcT5vqPa2w6MYHkYLJlE-Amlk4Pu6faJYLXY"},
        { name:"The Star", age:"Bo, a donkey, is bored of his regular life and wants to do something different. He sets on an adventurous.", img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9A_EBDKhmsfp_thrvdz_Kkkplg13yXRSQp19cvBCPwH7Z45P-"},
        { name:"Matilda", age:"Matilda, an extraordinary girl armed with a sharp mind and a vivid imagination, dares to take.", img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDNhOJrEpRgUfdO3-V0YtFEj2A-sNpuLtCgHptc2WFAAcPYMUp"},
        { name:"Vivo", age:"To fulfil his owner's last wish, Vivo, a pet kinkajou, ventures out on a musical adventure where he makes.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZeTe2a8BhOoh3pUsa-VqHebJw24vUJPdmQu6WIIzOfPcGy6k"},
        { name:"The Angry Birds Movie", age:"Bird and Piggy Islands are under threat when Zeta, the leader of Eagle Island, wants to occupy them.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PJ2VxellzwzllH-9xlRKCBTk6cp6a1JonQq_yBL6sCXBodJU"}
      ]);
  return (
    
      <div className="box">
      {students.map((el)=><Card style={{ width: '13rem',marginTop:'729px',height:'22rem',}}>
      <Card.Img id="vol" variant="top" src={el.img} style={{minwidth:"100px", maxwidth:"220px",minheight:"100px", maxHeight:"203px" }} />
      <svg id="saf" xmlns="http://www.w3.org/2000/svg" color="rgb(109, 8, 8)" width="40" height="40" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/> </svg>

      <Card.Body>
        <Card.Title style={{color:"white", fontSize:"16px"}}>{el.name}</Card.Title>
        <Card.Text>
         {el.age}
        </Card.Text>
        <div className="Fa">
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
      </Card.Body>
    </Card>)}
    </div>
    
  )
}

export default Kids1
