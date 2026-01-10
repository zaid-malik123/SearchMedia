import axios from "axios";


const UNSPLASH_API = import.meta.env.VITE_UNSPALSH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY


export async function searchPhotos(query, page=1, per_page=20) {
  const res = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API}`
      }
    }
  );
  return res.data.results;
}


export async function searchVideos(query, per_page=20) {
    const res = await axios.get("https://api.pexels.com/videos/search", {
        params: {query, per_page },
        headers: {Authorization: PEXELS_KEY}
    })
    return res.data.videos
}

export async function searchGIF(query, limit=20) {
    const res = await axios.get("https://tenor.googleapis.com/v2/search", {
        params: {q:query, key:TENOR_KEY, limit },
        
    })
    return res.data.results
}