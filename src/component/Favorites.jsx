import React from 'react'

const Favorites = ({ favt, removeFavt }) => {

  console.log(favt.length);

  return (
    <>
  <div className='text-center text-4xl font-semibold my-8'>Favorite Movies</div>
  {favt.length > 0 ? (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto p-4'>
      {favt.map((movie, index) => (
        <div 
          key={index} 
          className='flex bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
        >
          <div className='h-[250px] w-[180px]'>
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className='object-cover h-full w-full' 
            />
          </div>
          <div className='flex flex-col justify-between p-4 w-full'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-2'>{movie.Title}</h2>
              <p className='text-gray-700 text-sm mb-2'>
                <span className='font-semibold text-gray-900'>Director:</span> {movie.Director}
              </p>
              <p className='text-gray-700 text-sm mb-2'>
                <span className='font-semibold text-gray-900'>Year:</span> {movie.Year}
              </p>
              <p className='text-gray-600 text-sm line-clamp-3 '>
                {movie.Plot}
              </p>
            </div>
            <button 
              className='mt-4 self-start bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300'
              onClick={() => removeFavt(movie)}
            >
              Remove from Favorites
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='text-center text-2xl text-gray-600 mt-12'>No favorite movies added yet.</div>
  )}
</>

  )
}

export default Favorites