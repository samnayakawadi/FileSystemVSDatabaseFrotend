import { useState } from "react"
import axios from "axios"
import ReactJson from 'react-json-view'

const PUT = () => {

    const [getAllQuestionsData, setGetAllQuestionsData] = useState({ shuffleOptions: false })
    const [isEmptyObject, setIsEmptyObject] = useState(true);
    const [alert, setAlert] = useState({ status: false });
    const [questionId, setQuestionId] = useState("");
    const [responseData, setResponseData] = useState({});
    const [responseCode, setResponseCode] = useState(0);
    const [responseTime, setResponseTime] = useState(0);

    const onLoadQuestionDataHandler = () => {
        setIsEmptyObject(true);
        setAlert({ status: true, type: "primary", msg: "Fetching Question" })
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
                    setResponseData(err.response.data)
                }else{
                    setAlert({ status: true, type: "danger", msg: "Server Not Reachable" })
                }
            })
            var end = new Date().getTime();
            var time = end - start;
            setResponseTime(time)
        }, 1500)
    }

    const onChangePostQuestionDataHandler = (e) => {
        setGetAllQuestionsData(prevState => {
            return ({ ...prevState, [e.target.name]: e.target.value });
        })
        if (e.target.name === "shuffleOptions") {
            setGetAllQuestionsData(prevState => {
                return ({ ...prevState, [e.target.name]: !getAllQuestionsData.shuffleOptions });
            })
        }
    }

    const onSubmitPostQuestionDataHandler = () => {
        setAlert({ status: true, type: "primary", msg: "Processing" })
        console.log(alert)
        setTimeout(() => {
            var start = new Date().getTime();
            axios.put(`http://10.244.0.131:19771/questions/put/single`, getAllQuestionsData).then(res => {
                
                setResponseCode(res.status)
                setResponseData(res.data)
                if (res.data.status) {

                    setAlert({ status: true, type: "success", msg: "Data Post Successful" })
                }
                else {
                    setAlert({ status: true, type: "info", msg: res.data.msg })
                }
            }).catch(err => {
                setResponseCode(err.status)
                setResponseData(err.data)
                setAlert({ status: true, type: "danger", msg: "Server Not Reachable" })
            })
            var end = new Date().getTime();
            var time = end - start;
            setResponseTime(time)
        }, 1500);
        
        
    }

    return (
        <div className="m-3">
            <div className="columns box is-dark is-centered has-text-centered">
                <div className="column is-4">PUT Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:19771/questions/put/single</div>
            </div>
            <div className="columns box p-0 mt-1 is-centered">
                <div className="column is-6">
                    <input className="input mb-3 is-fullwidth" type="text" name="questionId" onChange={(e) => { setQuestionId(e.target.value) }} placeholder="Enter Question ID" />
                    {isEmptyObject && <div className="notification mb-3 has-text-centered is-info">Enter Valid Question ID to Display Content</div>}
                    {alert.status && <div className={`notification mb-3 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                    <button onClick={onLoadQuestionDataHandler} className="button mb-3 is-info is-fullwidth">Fetch Data</button>
                    <button onClick={onSubmitPostQuestionDataHandler} className="button mb-3 is-success is-fullwidth">Update Data</button>
                    {alert.status === false && !isEmptyObject &&
                            <table className="table is-fullwidth is-hoverable">
                                <thead>
                                    <tr>
                                        <td><p className="title is-5">Key</p></td>
                                        <td><p className="title is-5">Value</p></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Question</td>
                                        <td><input name="question" value={getAllQuestionsData.question} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>Type</td>
                                        <td>Single Choice</td>
                                    </tr>
                                    <tr>
                                        <td>Score</td>
                                        <td><input name="score" value={getAllQuestionsData.score} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Score" /></td>
                                    </tr>
                                    <tr>
                                        <td>Answer 1</td>
                                        <td><input name="answer1" value={getAllQuestionsData.answer1} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 1" /></td>
                                    </tr>
                                    <tr>
                                        <td>Answer 2</td>
                                        <td><input name="answer2" value={getAllQuestionsData.answer2} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 2" /></td>
                                    </tr>
                                    <tr>
                                        <td>Answer 3</td>
                                        <td><input name="answer3" value={getAllQuestionsData.answer3} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 3" /></td>
                                    </tr>
                                    <tr>
                                        <td>Answer 4</td>
                                        <td><input name="answer4" value={getAllQuestionsData.answer4} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 4" /></td>
                                    </tr>
                                    <tr>
                                        <td>Answer 5</td>
                                        <td><input name="answer5" value={getAllQuestionsData.answer5} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 5" /></td>
                                    </tr>
                                    <tr>
                                        <td>Correct Answer</td>
                                        <td><div className="select is-fullwidth">
                                            <select value={getAllQuestionsData.correctAnswer} name="correctAnswer" onChange={onChangePostQuestionDataHandler}>
                                                <option value="NULL">Select Correct Answer</option>
                                                <option value="answer1">Answer 1</option>
                                                <option value="answer2">Answer 2</option>
                                                <option value="answer3">Answer 3</option>
                                                <option value="answer4">Answer 4</option>
                                                <option value="answer5">Answer 5</option>
                                            </select>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Correct Feedback</td>
                                        <td><input name="correctFeedback" value={getAllQuestionsData.correctFeedback} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Correct Feedback" /></td>
                                    </tr>
                                    <tr>
                                        <td>Wrong Feedback</td>
                                        <td><input name="wrongFeedback" value={getAllQuestionsData.wrongFeedback} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Wrong Feedback" /></td>
                                    </tr>
                                    <tr>
                                        <td>Shuffle Options</td>
                                        <td><label className="checkbox">
                                            {getAllQuestionsData.shuffleOptions && <input defaultChecked type="checkbox" name="shuffleOptions" value={getAllQuestionsData.shuffleOptions} onChange={onChangePostQuestionDataHandler} />}
                                            {getAllQuestionsData.shuffleOptions === false && <input type="checkbox" name="shuffleOptions" value={getAllQuestionsData.shuffleOptions} onChange={onChangePostQuestionDataHandler} />}

                                            {" "}Shuffle The Options
                                        </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Learning Time</td>
                                        <td><input name="learningTime" value={getAllQuestionsData.learningTime} onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Wrong Feedback" /></td>
                                    </tr>

                                    <tr>
                                        <td>Difficulty</td>
                                        <td><div className="select is-fullwidth">
                                            <select value={getAllQuestionsData.difficulty} name="difficulty" onChange={onChangePostQuestionDataHandler}>
                                                <option value="NULL">Select Difficulty</option>
                                                <option value="easy">Easy</option>
                                                <option value="medium">Medium</option>
                                                <option value="hard">Hard</option>
                                            </select>
                                        </div>
                                        </td></tr>

                                </tbody>
                            </table>}
                </div>

                <div className="column is-6">
                    <div className="notification is-dark has-text-centered title is-4">Response Time : {responseTime} ms</div>
                    <div className="notification is-dark has-text-centered title is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title is-4">Response</div>
                    <ReactJson src={responseData} style={{ borderRadius: "5px" }} theme="monokai" />
                    <div className="notification is-dark has-text-centered title mt-4 is-4">Request</div>
                    <ReactJson src={getAllQuestionsData} style={{ borderRadius: "5px" }} theme="monokai" />
                </div>
            </div>
        </div>
    )
}
export default PUT;