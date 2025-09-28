import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Single = ({AddFavt}) => {
    const { id } = useParams();


    // console.log("param",param);
    const [singleMovie, setSingleMovie] = useState("");

    const getSingleData = async () => {
        const data = await axios.get(`https://omdbapi.com/?apikey=392901a4&i=${id}`)
        setSingleMovie(data.data)

    }
    useEffect(() => {
        getSingleData();
    }, [])

    return (
        
        <div className='flex flex-col lg:flex-row justify-center items-start my-8 bg-gray-100 rounded-lg shadow-lg p-6'>
  <div className='lg:w-1/3 flex justify-center mb-6 lg:mb-0'>
    <img 
      src={singleMovie.Poster} 
      alt={singleMovie.Title} 
      className='rounded-lg shadow-lg object-cover h-[450px] w-[300px]'
    />
  </div>
  <div className='lg:w-2/3 bg-white rounded-lg shadow-lg p-8'>
    <h1 className='text-4xl font-bold text-gray-800 mb-4'>{singleMovie.Title}</h1>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800 '>Year:</span> {singleMovie.Year}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>Genre:</span> {singleMovie.Genre}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>Runtime:</span> {singleMovie.Runtime}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>Director:</span> {singleMovie.Director}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>Actors:</span> {singleMovie.Actors}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>Language:</span> {singleMovie.Language}
    </p>
    <p className='text-gray-600 mb-2'>
      <span className='font-semibold text-gray-800'>IMDB Rating:</span> {singleMovie.imdbRating}
    </p>
    <p className='text-gray-700 my-6'>
      <span className='font-semibold text-gray-800'>Plot:</span> {singleMovie.Plot}
    </p>
    <button 
      className='bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300'
      onClick={() => AddFavt(singleMovie)}
    >
      Add to Favorites
    </button>
  </div>
</div>

        
        
    )
}

export default Single