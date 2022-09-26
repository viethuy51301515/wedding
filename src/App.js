import { Route, BrowserRouter, Routes } from "react-router-dom";
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
import { ModalProvider } from "./components/context/modalContext";
import Album from "./pages/Album";
import Destination from "./pages/Destination";
const Wrapper = () => {
  return (
    <ModalProvider>
      <Tag />
      <Header />
      <Portfolio />
      <CountDown />

      <Event />
      <Gallery />
      <Story />

      <Footer />
    </ModalProvider>
  );
};
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="/destination" element={<Destination />} />
          <Route path="/album" element={<Album />} />
          <Route path="/" exact element={<Wrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
