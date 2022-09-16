import "./App.css";
import {
  CountDown,
  Event,
  Footer,
  Header,
  PictureFrame,
  Portfolio,
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
        {/* <CountDown />

        <Event />
        <CountDown />
        <Footer />
        <Modal /> */}
      </ModalProvider>
    </div>
  );
}

export default App;
