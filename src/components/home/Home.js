import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="columns m-1 is-tablet is-centered">
            <section className="box m-3 hero is-primary">
                <div className="hero-body has-text-centered">
                    <p className="title ">eAssessment</p>
                    <p className="subtitle">by eLearning Team</p>
                </div>
            </section>

            <div className="column is-three-fifths is-centered">
                <section className="box hero is-">
                    <div className="hero-body">
                        <p className="title is-4 has-text-centered">Exams. Simplified.</p>
                    </div>
                </section>

                <div className="">
                    <div className="card">
                        <div className="card-content">
                            <p className="is-size-6 has-text-centered">
                                Here I will be researching different types of storage we can use in this project. Choose from below options
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <span>
                                    Go to {" "}
                                    <Link to="/mongodb">Dashboard</Link>
                                </span>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;