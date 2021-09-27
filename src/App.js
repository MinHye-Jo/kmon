import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { isIE, isEdge } from "react-device-detect";
import { RecoilRoot } from "recoil";

import "./styles/css/nanumsquareround.css";

import Header from "./screens/frame/Header";
import Main from "./screens/Main";
import Guide from "./screens/Guide";
import Roadmap from "./screens/Roadmap";
import Footer from "./screens/frame/Footer";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        {isIE || isEdge ? alert("IE / Edge is not supported. Download Chrome/Opera/Firefox") : null}
        <Route exact path="/" component={Main} />
        <Route path="/Guide" component={Guide} />
        <Route path="/Roadmap" component={Roadmap} />
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
