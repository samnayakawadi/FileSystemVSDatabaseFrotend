import { useState } from "react"
import axios from "axios"
import ReactJson from 'react-json-view'

const GETALL = () => {

    const [getAllQuestionsData, setGetAllQuestionsData] = useState([])
    const [alert, setAlert] = useState({ status: false });
    const [responseCode, setResponseCode] = useState(0);
    const [responseTime, setResponseTime] = useState(0);

    // useEffect(() => {

    // }, [])



    const onLoadQuestionDataHandler = () => {
        setAlert({ status: true, type: "primary", msg: "Fetching all Questions" })
        setTimeout(() => {

            // const instance = axios.create()

            // instance.interceptors.request.use((config) => {
            //     config.headers['request-startTime'] = process.hrtime()
            //     return config
            // })

            // instance.interceptors.response.use((response) => {
            //     const start = response.config.headers['request-startTime']
            //     const end = process.hrtime(start)
            //     const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000))
            //     response.headers['request-duration'] = milliseconds
            //     return response
            // })

            // instance.get(`http://10.244.0.131:1977/questions/get/all`).then((res) => {
            //     // console.log(res.headers['request-duration'])
            //     setResponseTime(res.headers['request-duration'])
            //     setResponseCode(res.status)
            //     setGetAllQuestionsData(res.data);
            //     setAlert({ status: false })
            // }).catch((err) => {
            //     setResponseCode(err.status)
            //     // console.error(`Error`)
            // })

            axios.get(`http://10.244.0.131:1977/questions/get/all`).then(res => {

                setResponseCode(res.status)
                setGetAllQuestionsData(res.data);
                setAlert({ status: false })
            }).catch(err => {
                setResponseCode(err.status)
            })

            console.log(responseTime)

        }, 1500)
    }

    return (
        <div>
            <div className="columns notification is-dark is-centered has-text-centered m-1">
                <div className="column is-4">GET ALL Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:1977/questions/get/all</div>
            </div>
            <div className="columns is-centered">
                <div className="column pt-5 p-4 is-6">
                    {getAllQuestionsData.length === 0 && <div className="notification mt-3 has-text-centered is-info">No Questions to Display</div>}
                    {/* {alert.status && <div className={`notification m-1 has-text-centered is-${alert.type}`}>{alert.msg}</div>} */}
                    {alert.status === false && getAllQuestionsData.map(singleQuestion => {
                        return <span className="box mt-3">
                            <table className="table is-fullwidth is-hoverable">
                                <thead>
                                    <tr>
                                        <td><p className="title is-5">Key</p></td>
                                        <td><p className="title is-5">Value</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Question ID</td>
                                        <td>{singleQuestion.questionId}</td>
                                    </tr>
                                    <tr>
                                        <td>Question</td>
                                        <td>{singleQuestion.question}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Single Choice</td>
                                    </tr>
                                    <tr>
                                        <td>Score</td>
                                        <td>{singleQuestion.score}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 1</td>
                                        <td>{singleQuestion.answer1}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 2</td>
                                        <td>{singleQuestion.answer2}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 3</td>
                                        <td>{singleQuestion.answer3}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 4</td>
                                        <td>{singleQuestion.answer4}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 5</td>
                                        <td>{singleQuestion.answer5}</td>
                                    </tr>
                                    <tr>
                                        <td>Correct Answer</td>
                                        <td>{singleQuestion.correctAnswer}</td>
                                    </tr>
                                    <tr>
                                        <td>Correct Feedback</td>
                                        <td>{singleQuestion.correctFeedback}</td>
                                    </tr>
                                    <tr>
                                        <td>Wrong Feedback</td>
                                        <td>{singleQuestion.wrongFeedback}</td>
                                    </tr>
                                    <tr>
                                        <td>Shuffle Options</td>
                                        <td>{singleQuestion.shuffleOptions ? "True" : "False"}</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Learning Time</td>
                                        <td>{singleQuestion.learningTime}</td>
                                    </tr>

                                    <tr>
                                        <td>Difficulty</td>
                                        <td>{singleQuestion.difficulty}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </span>
                    })}
                </div>

                <div className="column is-6 p-4 mt-5">
                    {alert.status && <div className={`notification mb-3 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                    <button onClick={onLoadQuestionDataHandler} className="button mb-4 is-info is-fullwidth">Request</button>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response</div>
                    <ReactJson src={getAllQuestionsData} style={{ borderRadius: "5px" }} theme="monokai" />
                    {/* <div className="notification is-dark has-text-centered title mt-4 is-4">POST Data</div>
                <ReactJson src={postQuestionData} style={{ borderRadius: "5px" }} theme="monokai" /> */}
                </div>
            </div>
        </div>
    )
}
export default GETALL;