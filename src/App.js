import Home from "./components/home/Home"
import Navbar from "./components/navigation/Navbar"
import { Routes, Route } from "react-router"
import Footer from "./components/navigation/Footer";
import DashboardRouter from "./components/routers/DashboardRouter";

function App() {

  return (
      <div >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mongodb/*" element={<DashboardRouter />} />
        </Routes> 
        <Footer />
      </div> 
  ); 
}

export default App;
