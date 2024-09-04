import { BrowserRouter } from "react-router-dom";
import {
  About,
  Experience,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          style={{
            backgroundImage: `url('/herobg.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
