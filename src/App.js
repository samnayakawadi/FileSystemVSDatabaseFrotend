import Home from "./components/home/Home"
import Navbar from "./components/navigation/Navbar"
import { Routes, Route } from "react-router"
import Footer from "./components/navigation/Footer";
import DashboardRouter from "./components/routers/DashboardRouter";
import { UserContext } from "./components/dashboard/contexts/UserContext";
import {useState} from "react"

function App() {

  const [userDetails, setUserDetails] = useState({currentDatabase:"fileSystem"})

  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
      <div >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<DashboardRouter />} />
        </Routes> 
        <Footer />
      </div> 
    </UserContext.Provider>
  ); 
}

export default App;
