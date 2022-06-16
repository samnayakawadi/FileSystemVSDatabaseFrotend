import { useState } from "react"
import axios from "axios"
import ReactJson from 'react-json-view'

const DELETE = () => {

    const [getAllQuestionsData, setGetAllQuestionsData] = useState({})
    const [isEmptyObject, setIsEmptyObject] = useState(true);
    const [alert, setAlert] = useState({ status: false });
    const [questionId, setQuestionId] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);
    const [responseCode, setResponseCode] = useState(0);

    const onLoadQuestionDataHandler = () => {
        setIsEmptyObject(true);
        setIsDeleted(false)
        setAlert({ status: true, type: "primary", msg: "Sending Delete Request" })
        setTimeout(() => {
            axios.delete(`http://10.244.0.131:1977/questions/delete/single/${questionId}`).then(res => {
                setResponseCode(res.status)
                setGetAllQuestionsData(res.data);
                setAlert({ status: false })
                if(res.data.questionId === questionId){
                    setIsEmptyObject(false);
                }
                if(res.data.status){
                    setIsDeleted(true)
                    setIsEmptyObject(false);
                }
            }).catch(err=>{
                setResponseCode(err.status)
                if (err.response.status === 404) {
                    setAlert({ status: true, type: "info", msg: "You have entered Wrong Question ID" })
                    setGetAllQuestionsData(err.response.data)
                }
            })
        }, 1500)
    }

    return (
        <div>
            <div className="columns notification is-dark is-centered has-text-centered m-1">
                <div className="column is-4">DELETE Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:1977/questions/delete/single/{questionId}</div>
            </div>
            <div className="columns is-centered">
                <div className="column pt-5 p-4 is-6">
                    {isEmptyObject && <div className="notification mt-3 has-text-centered is-info">Enter Valid Question ID to Delete It</div>}
                    {isDeleted && <div className="notification mt-3 has-text-centered is-success">Question Data Deleted Successfully</div>}
                    {/* {alert.status && <div className={`notification m-1 has-text-centered is-${alert.type}`}>{alert.msg}</div>} */}
                    {/* {alert.status === false && !isEmptyObject && 
                    <span className="box mt-3">
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
                                    <td>{getAllQuestionsData.shuffleOptions}</td>
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
                    </span>} */}
                </div>

                <div className="column is-6 p-4 mt-5">
                    <input className="input mb-2 is-fullwidth" type="text" name="questionId" onChange={(e) => { setQuestionId(e.target.value) }} placeholder="Enter Question ID" />
                    {alert.status && <div className={`notification mb-3 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                    <button onClick={onLoadQuestionDataHandler} className="button mb-4 is-info is-fullwidth">Request</button>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response</div>
                    <ReactJson src={getAllQuestionsData} style={{ borderRadius: "5px" }} theme="monokai" />
                </div>
            </div>
        </div>
    )
}
export default DELETE;