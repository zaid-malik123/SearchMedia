import React from 'react'

const SearchResults = ({item}) => {
  return (
    <div className='w-75 h-100 rounded-xl p-2'>
        <div className='h-[70%] w-full '>
            {item.type == "Photo" && <img className='h-full w-full object-cover rounded-md' src={item.src}></img>}
            {item.type == "Video" && <video className='h-full w-full object-cover rounded-md' autoPlay muted src={item.src}></video>}
            {item.type == "GIF" && <img className='h-full w-full object-cover rounded-md' src={item.src}></img>}
        </div>
        <div>
            <p className='text-sm font-200 text-gray-600 mt-5'>{item.title}</p>
        </div>
    </div>
  )
}

export default SearchResults