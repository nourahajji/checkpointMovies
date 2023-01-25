import React from 'react'
import ReactStars from "react-rating-stars-component";

function My() {
  return (
    <div className='bmy'>
    <video id="hhh"src="/video 7.mp4" autoPlay muted></video>
    <h1 id="title">M<span>3</span>GAN</h1>
 <p id="para">The story follows Gemma, a roboticist working at a toy company,<br></br> who suddenly becomes the guardian of her eight-year-old <br></br>niece, Cady. Cady loses her parents in an accident<br></br> and is deeply grieving.<br></br>92% liked this film<br></br>January 6, 2023</p>
 <div className='glg'>
 <ReactStars 
    count={5}
    size={24}
    value={3}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  ReactStars/>,
   </div>
   <p id='clo'>Action / Horror/ fantasy</p>
   <svg id="milm" xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
   <svg id="lop" xmlns="http://www.w3.org/2000/svg" color="white" width="30" height="30" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
</svg>
    </div>
  )
}

export default My