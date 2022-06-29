import { useState } from "react"
import axios from "axios"
import ReactJson from 'react-json-view'

const GET = () => {

    const [getAllQuestionsData, setGetAllQuestionsData] = useState({})
    const [isEmptyObject, setIsEmptyObject] = useState(true);
    const [alert, setAlert] = useState({ status: false });
    const [questionId, setQuestionId] = useState("");
    const [responseCode, setResponseCode] = useState(0);
    const [responseTime, setResponseTime] = useState(0);

    const onLoadQuestionDataHandler = () => {
        setIsEmptyObject(true);
        setAlert({ status: true, type: "primary", msg: "Fetching all Questions" })
        setTimeout(() => {
            var start = new Date().getTime();
            axios.get(`http://10.244.0.131:19771/questions/get/single/${questionId}`).then(res => {
                setResponseCode(res.status)
                setGetAllQuestionsData(res.data);
                if (res.data.questionId === questionId) {
                    setIsEmptyObject(false);
                }
                setAlert({ status: false })

            }).catch(err => {
                
                setResponseCode(err.status)
                if (err.response.status === 404) {
                    setResponseCode(err.response.status)
                    setAlert({ status: true, type: "danger", msg: "You have entered Wrong Question ID" })
                    setGetAllQuestionsData(err.response.data)
                }else{
                    setAlert({ status: true, type: "danger", msg: "Server Not Reachable" })
                }
            })
            var end = new Date().getTime();
            var time = end - start;
            setResponseTime(time)
        }, 1500)
    }

    return (
        <div className="m-3">
            <div className="columns box is-dark is-centered has-text-centered">
                <div className="column is-4">GET Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:19771/questions/get/single/{questionId}</div>
            </div>
            <div className="columns box p-0 mt-1 is-centered">
                <div className="column is-6">
                    <input className="input mb-3 is-fullwidth" type="text" name="questionId" onChange={(e) => { setQuestionId(e.target.value) }} placeholder="Enter Question ID" />
                    {isEmptyObject && <div className="notification mb-3 has-text-centered is-info">Enter Valid Question ID to Display Content</div>}
                    {alert.status && <div className={`notification mb-3 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                    <button onClick={onLoadQuestionDataHandler} className="button mb-3 is-info is-fullwidth">Request</button>
                    {alert.status === false && !isEmptyObject &&
                        <span>
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
                                        <td>{getAllQuestionsData.questionId}</td>
                                    </tr>
                                    <tr>
                                        <td>Question</td>
                                        <td>{getAllQuestionsData.question}</td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Single Choice</td>
                                    </tr>
                                    <tr>
                                        <td>Score</td>
                                        <td>{getAllQuestionsData.score}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 1</td>
                                        <td>{getAllQuestionsData.answer1}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 2</td>
                                        <td>{getAllQuestionsData.answer2}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 3</td>
                                        <td>{getAllQuestionsData.answer3}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 4</td>
                                        <td>{getAllQuestionsData.answer4}</td>
                                    </tr>
                                    <tr>
                                        <td>Answer 5</td>
                                        <td>{getAllQuestionsData.answer5}</td>
                                    </tr>
                                    <tr>
                                        <td>Correct Answer</td>
                                        <td>{getAllQuestionsData.correctAnswer}</td>
                                    </tr>
                                    <tr>
                                        <td>Correct Feedback</td>
                                        <td>{getAllQuestionsData.correctFeedback}</td>
                                    </tr>
                                    <tr>
                                        <td>Wrong Feedback</td>
                                        <td>{getAllQuestionsData.wrongFeedback}</td>
                                    </tr>
                                    <tr>
                                        <td>Shuffle Options</td>
                                        <td>{getAllQuestionsData.shuffleOptions ? "True" : "False"}</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Learning Time</td>
                                        <td>{getAllQuestionsData.learningTime}</td>
                                    </tr>

                                    <tr>
                                        <td>Difficulty</td>
                                        <td>{getAllQuestionsData.difficulty}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </span>}
                </div>

                <div className="column is-6 ">
                    <div className="notification is-dark has-text-centered title is-4">Response Time : {responseTime} ms</div>
                    <div className="notification is-dark has-text-centered title is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title is-4">Response</div>
                    <ReactJson src={getAllQuestionsData} style={{ borderRadius: "5px" }} theme="monokai" />
                </div>
            </div>
        </div>
    )
}
export default GET;