import image from "./images/mongoDB3.png"

const DashboardHome = () => {
    return (
        <div className="columns box is-centered is-vcentered " style={{margin:"1px"}}>
            <div className="column is-6 has-text-centered">
                <div className="title">MongoDB : 2007</div>
                <div>- Ad-hoc queries for optimized, real-time analytics</div>
                <div>- Indexing appropriately for better query executions</div>
                <div>- Replication for better data availability and stability</div>
                <div>- Sharding</div>
                <div>- Load balancing</div>
            </div>
            <div className="column is-6 has-text-centered">
                <img src={image} alt="File vs DBMS" width={300} />
            </div>
        </div>
    )
}
export default DashboardHome;