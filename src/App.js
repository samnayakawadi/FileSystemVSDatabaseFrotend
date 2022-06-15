import Home from "./components/home/Home"
import Navbar from "./components/navigation/Navbar"
import {Routes, Route} from "react-router"
import Footer from "./components/navigation/Footer";
import FileSystemRouter from "./components/routers/FileSystemRouter"; 
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/filesystem/*" element={<FileSystemRouter/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
