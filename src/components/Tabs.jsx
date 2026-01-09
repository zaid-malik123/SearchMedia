import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "GIF", "Videos"];
  const dispatch = useDispatch()
  const {activeTab} = useSelector(state => state.search)
  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      {tabs.map((tab) => (
        <div
          onClick={() => dispatch(setActiveTab(tab))}
          key={tab}
          className= {`px-8 py-3 rounded-3xl border border-gray-400 hover:bg-gray-200 cursor-pointer text-xl text-gray-500 ${ activeTab == tab ? "bg-blue-500 text-white" : ""}`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
