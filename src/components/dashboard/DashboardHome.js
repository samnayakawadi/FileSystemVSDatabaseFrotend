import image from "./images/fileSystem2.png"

const DashboardHome = () => {
    return (
        <div className="columns box is-centered is-vcentered " style={{margin:"1px"}}>
            <div className="column is-6 has-text-centered">
                <div className="title">File System : 1977</div>
                <div>- It provides I/O support for a variety of storage device types.</div>
                <div>- Minimizes the chances of lost or destroyed data</div>
                <div>- Helps OS to standardized I/O interface routines for user processes</div>
                <div>- It provides I/O support for multiple users in a multiuser systems environment.</div>
            </div>
            <div className="column is-6 has-text-centered">
                <img src={image} alt="File vs DBMS" width={300} />
            </div>
        </div>
    )
}
export default DashboardHome;