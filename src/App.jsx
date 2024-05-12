import Title from "./Title";
import Buttons from "./Buttons";
import Info from "./Info";
import Footer from "./Footer";
import blaise from "./img/blaise.jpg";
import "./style.css";

export default function App() {
  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img src={blaise} alt="Blaise profile photo" />
        </div>

        <div className="cardBottom">
          <Title />
          <Buttons />
          <Info />
        </div>

        <Footer />
      </div>
    </>
  );
}
