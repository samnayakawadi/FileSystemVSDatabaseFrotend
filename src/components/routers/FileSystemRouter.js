import FileSystemSidebar from "../filesystem/FileSystemSidebar";
import FileSystemHome from "../filesystem/FileSystemHome";
import {Routes, Route} from "react-router"
import GET from "../filesystem/methods/GET";
import GETALL from "../filesystem/methods/GETALL";
import POST from "../filesystem/methods/POST";
import PUT from "../filesystem/methods/PUT";
import DELETE from "../filesystem/methods/DELETE";
const FileSystemRouter = ()=>{
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<FileSystemSidebar/>}>
                    <Route path="/" element={<FileSystemHome/>}/>
                    <Route path="/post" element={<POST/>}/>
                    <Route path="/get" element={<GET/>}/>
                    <Route path="/getall" element={<GETALL/>}/>
                    <Route path="/put" element={<PUT/>}/>
                    <Route path="/delete" element={<DELETE/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default FileSystemRouter;