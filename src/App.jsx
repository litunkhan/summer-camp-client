import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";


const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      
      <div>
      <Outlet></Outlet>
      </div>
      <div>
      <Footer></Footer>
      </div>
      
     
    </div>
  );
};

export default App;