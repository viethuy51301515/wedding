import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  fetchAbout,
  fetchBackground,
  fetchGallery,
  fetchPlaces,
  fetchStory,
  fetchTimer,
} from "./action/action";
import "./App.css";
import {
  CountDown,
  Event,
  Footer,
  Gallery,
  Header,
  Portfolio,
  Story,
  Tag,
} from "./components";
import Album from "./pages/Album";
import Destination from "./pages/Destination";
import "bootstrap/dist/css/bootstrap.min.css";
const Wrapper = () => {
  const store = useSelector((state) => state);
  return (
    <div>
      <Tag />
      <Header imageUrl={store.background} />
      <Portfolio />
      <CountDown />

      <Event />
      <Gallery />
      <Story />

      <Footer />
    </div>
  );
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBackground());
    dispatch(fetchAbout());
    dispatch(fetchTimer());
    dispatch(fetchPlaces());
    dispatch(fetchGallery());
    dispatch(fetchStory());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/destination/:name" element={<Destination />} />
          <Route path="/album" element={<Album />} />
          <Route path="/" exact element={<Wrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
