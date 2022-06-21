import DashboardSidebar from "../dashboard/DashboardSidebar";
import DashboardHome from "../dashboard/DashboardHome";
import {Routes, Route} from "react-router"
import GET from "../dashboard/methods/GET";
import GETALL from "../dashboard/methods/GETALL";
import POST from "../dashboard/methods/POST";
import PUT from "../dashboard/methods/PUT";
import DELETE from "../dashboard/methods/DELETE";
const DashboardRouter = ()=>{
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<DashboardSidebar/>}>
                    <Route path="/" element={<DashboardHome/>}/>
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
export default DashboardRouter;