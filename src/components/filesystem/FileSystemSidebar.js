import { Link, Outlet } from "react-router-dom"


const FileSystemSidebar = () => {
    return (
        <div>
            {/* <div className="columns is-centered mx-2 mt-6">
                <div className="column is-2 m-3 p-6 box has-text-centered">
                    Current Storage
                </div>
                <div className="column is-7 m-3 p-6 box has-text-centered">
                    File System
                </div>
            </div> */}
            <div className="columns is-centered mx-2 mt-3">

                <div className="column is-2 box p-6 m-3" >
                    <div className="notification is-primary has-text-centered">
                        File System
                    </div>
                    <aside className="menu">
                        <p className="menu-label">
                            Create the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/filesystem/post">POST</Link></li>
                        </ul>
                        <p className="menu-label">
                            Get the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/filesystem/get">GET</Link></li>
                            <li><Link to="/filesystem/getall">GET {"(All)"}</Link></li>
                        </ul>
                        <p className="menu-label">
                            Update the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/filesystem/put">PUT</Link></li>
                        </ul>
                        <p className="menu-label">
                            Delete the Question
                        </p>
                        <ul className="menu-list">
                            <li><Link to="/filesystem/delete">DELETE</Link></li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-7 box p-6 m-3">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}
export default FileSystemSidebar;