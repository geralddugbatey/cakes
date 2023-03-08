import Globalstyle from "./Globalstyles";
import { Body } from "./bodyelements";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";

import { Images, Horizon } from "./Data/Data";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import List from "./Components/List/List";
import Explore from "./Components/Explore/Explore";
import Location from "./Components/Location/Location";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Globalstyle />
      <Body>
        <Nav />
        <Home {...Images} />
        <About />
        <Title />
        <List {...Horizon} />
        <Explore />
        <Location />
        <Footer/>
      </Body>
    </>
  );
}

export default App;
