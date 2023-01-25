import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Saf from './components/Saf';
import Nes from './components/Nes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/Movies';
import ReactStars from "react-rating-stars-component";
import Foter from './components/Foter';
import About from './components/About';
import Contact from './components/Contact';
import Trailer from './components/Trailer';
import Kids1 from './components/Kids1';




function App() {
  const [Lists, setLists] = useState([
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
    const [text, settext] = useState("")
    const [rate, setrate] = useState("")
  return (
    <div className="App">
      <Navbar settext={settext} setrate={setrate}/>
      <Routes>
        <Route path="/" element={ <Movies text={text} rate={rate}/> } />
        <Route path="/Trailer/:name" element={ <Trailer Lists={Lists}/>} />
      </Routes>
<div>
    </div>
    </div>
  );
}

export default App;
