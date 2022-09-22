import "./App.css";
import {
  CountDown,
  Event,
  Footer,
  Gallery,
  Header,
  PictureFrame,
  Portfolio,
  Story,
  Tag,
  Timeline,
} from "./components";
import { ModalProvider } from "./components/context/modalContext";
import Modal from "./components/modal/Modal";
function App() {
  return (
    <div className="wrapper">
      <ModalProvider>
        <Tag />
        <Header />
        <Portfolio />
        <CountDown />

        <Event />
        <Gallery />
        <Story />
        {/* <CountDown />
        <Footer />
        <Modal /> */}
      </ModalProvider>
    </div>
  );
}

export default App;
