import React, { useState } from 'react'
import "./Mod.css"
function Mod({List,setList}) {
  console.log(List)
const [Newmovies, setNewmovies] = useState({
  name:"", 
  posterurl:"",
  description:"",
rating:""
})
const handleadd=()=>{
  setList([...List,Newmovies])
}
const [show, setshow] = useState(true);
const handleclose=()=> setshow(false);

  return (
    <div>
      <div>
      <div className="wrapper">
        <a href="#demo-modal">
          <svg id="lo"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </a>
      </div>
      {show? <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>Add a movie</h1>
          <div><form  onSubmit={e => {e.preventDefault()}} > 
              <label htmlFor="fname">Movie name :</label>
              <br/>
              <input type="text"   placeholder="Enter Movies name" onChange={(e)=>setNewmovies({...Newmovies,name:e.target.value})}/>
              <label htmlFor="fname">Movie Image :</label>
              <br/>
              <input type="text"  placeholder="Enter Movies image" onChange={(e)=>setNewmovies({...Newmovies,posterurl:e.target.value})} />
              <br />
              <label htmlFor="fname">Movie description :</label>
              <br/>
              <input type="text" placeholder="Enter description Movies"  onChange={(e)=>setNewmovies({...Newmovies,description:e.target.value})} />
              <br />
              <label htmlFor="fname">Rating:</label>
              <br />
              <input type="text"  placeholder="Enter Ratiing Movies"  onChange={(e)=>setNewmovies({...Newmovies,rating:e.target.value})} />
              <br />
              <br />
              <br />
              <button onClick={()=>{{handleadd();handleclose();}}}>Add</button>
            </form>
          </div>
          <a href="#" className="modal__close">
            ×
          </a>
        </div>
      </div>:null}
    </div>
    </div>
  )
}

export default Mod

