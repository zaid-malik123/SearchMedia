import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar = () => {
  const [search, setSearch] = useState("") 
  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(setQuery(search))
  }
  return (
    <div>

        <form onSubmit={handleSubmit} className='flex w-full items-center justify-center gap-3' >
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='w-[70%] py-4 outline-0 border border-gray-400 rounded-2xl px-5 text-xl text-gray-800' placeholder='Enter Media ...' type="text" />
            <button className='px-5 py-4 bg-blue-500 text-white rounded-xl '>Search</button>
        </form>
    </div>
  )
}

export default SearchBar