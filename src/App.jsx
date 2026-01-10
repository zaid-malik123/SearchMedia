// import { searchGIF, searchPhotos, searchVideos } from './api/mediaApi'

import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"


const App = () => {

  // const SearchVideos = async () => {
  //   const data = await searchVideos("cat")
  //   console.log(data)
  // }
  // const SearchPhotos = async () => {
  //   const data = await searchPhotos("cat")
  //   console.log(data)
  // }


  // const SearchGIF = async () => {
  //   const data = await searchGIF("cat")
  //   console.log(data)
  // }

  return (
    <div className='w-screen h-screen p-10'>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      {/* <button onClick={SearchPhotos} className='px-5 py-2 bg-black text-white rounded-md ml-10'>Photos</button>
      <button onClick={SearchVideos} className='px-5 py-2 bg-black text-white rounded-md ml-10'>Videos</button>
      <button onClick={SearchGIF} className='px-5 py-2 bg-black text-white rounded-md ml-10'>GIF</button> */}

    </div>
  )
}

export default App