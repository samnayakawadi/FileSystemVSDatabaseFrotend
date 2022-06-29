import { Link, Outlet } from "react-router-dom"

const DashboardSidebar = () => {

    return (
        <div>
            <div className="columns is-centered m-2">

                <div className="column is-2 m-1" >
                    <div className="notification is-primary has-text-centered">
                    MongoDB
                    </div>
                    <aside className="menu box">
                        <p className="menu-label">
                            Create the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/mongodb/post">POST</Link></li>
                        </ul>
                        <p className="menu-label">
                            Get the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/mongodb/get">GET</Link></li>
                            <li><Link to="/mongodb/getall">GET {"(All)"}</Link></li>
                        </ul>
                        <p className="menu-label">
                            Update the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/mongodb/put">PUT</Link></li>
                        </ul>
                        <p className="menu-label">
                            Delete the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/mongodb/delete">DELETE</Link></li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-7 m-1">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
export default DashboardSidebar;