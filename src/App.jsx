import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";


const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[28.1vh]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;