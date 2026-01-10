import { useDispatch, useSelector } from "react-redux";
import { searchPhotos, searchVideos, searchGIF } from "../api/mediaApi";
import { useEffect } from "react";
import { data } from "react-router-dom";
import { setResults } from "../redux/features/searchSlice";
import SearchResults from "./SearchResults";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results } = useSelector((state) => state.search);
  useEffect(() => {
    const getData = async () => {
      let data = []
      if (activeTab == "Photos") {
        if (query) {
          const res = await searchPhotos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "Photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
      }
      if (activeTab == "Videos") {
        if (query) {
          const res = await searchVideos(query);
          data = res.map((item) => ({
            id: item.id,
            type: "Video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
      }
      if (activeTab === "GIF") {
        if (query) {
          const res = await searchGIF(query);

          data = res.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.content_description || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
          }));
        }
      }

      dispatch(setResults(data))
    };
    getData();
  }, [query, activeTab]);

  return (
    <div className="grid  grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-4 gap-3 w-full mt-10">
        {results?.map((item) => (
            <div className="" key={item.id}>
                <SearchResults item={item} />
            </div>
        ))}
    </div>
  )
};

export default ResultGrid;
