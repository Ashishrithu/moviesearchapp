import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Single from './component/Single'
import './App.css'
import Navbar from './component/Navbar'
import Favorites from './component/Favorites'



const App = () => {
  const url="https://omdbapi.com/?apikey=392901a4&";

  const [favt,setFavt]=useState([]);


  const AddFavt=(movie)=>{

    if(favt.some(f=>f.imdbID==movie.imdbID)){
      return alert("The movie is already added to favourites");
    }
    else{
      setFavt([...favt, movie]);
    }

  }
  
  const removeFavt=(movie)=>{
    setFavt(favt.filter((item)=>item.imdbID!=movie.imdbID))
  }

  
  

  return (
    <>
    <Router>
      <Navbar favt={favt} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single/:id" element={<Single AddFavt={AddFavt} />}></Route>
        <Route path="/favourites" element={<Favorites favt={favt} removeFavt={removeFavt} />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App