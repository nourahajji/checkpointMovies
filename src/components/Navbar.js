import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Navbar({settext,setrate}) {
  return (
    <div className="green">
 <nav>
        <h2 class="brand">My<span>MOvies</span></h2>
 <ul>
    <li> <a href="#">Home</a></li>
    <li> <a href="#bb">Séries</a></li>
    <li> <a href="#video1">Tv shows</a></li>
    <li> <a href="#vol">Kids</a></li>
    <li> <a href="">About</a></li>
    <li> <a href="#ww">Cast</a></li>
    <li id="mlo5"> <Link to="/contact">Contact</Link></li>
    <div className="kiko">
  <ReactStars 
    count={5}
    size={24}
    value={3}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  ReactStars
  onChange={(newRating)=>setrate(newRating)}/>,
  </div>
    <input id="lili" type="text" placeholder='search...' onChange={(e)=>settext(e.target.value)}></input>
    <svg id="kilo" xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<a href="#yoyo"> 
<svg id="sisi" xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
</a>

 </ul>
 
 </nav>

 

 
 </div>


    
  )
}

export default Navbar
