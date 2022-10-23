import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Yeezy350V2 from "./Yeezy350V2";
import Yeezy350V2CMPCT from "./Yeezy350V2CMPCT";
import Yeezy450 from "./Yeezy450";
import Yeezy500 from "./Yeezy500";
import Yeezy700 from "./Yeezy700";
import Yeezy700MNVN from "./Yeezy700MNVN";
import Yeezy700V2 from "./Yeezy700V2";
import Yeezy700V3 from "./Yeezy700V3";
import YeezyFoamRunner from "./YeezyFoamRunner";
import YeezyKnitRunner from "./YeezyKnitRunner";
import YeezyQNTM from "./YeezyQNTM";
import YeezySlide from "./YeezySlide";

const RouteSwitch = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;