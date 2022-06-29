import axios from "axios";
import { useState } from "react";
import ReactJson from 'react-json-view'

const POST = () => {

    const [postQuestionData, setPostQuestionData] = useState({ type: "singleChoice", shuffleOptions: false });
    const [alert, setAlert] = useState({ status: false });
    const [responseData, setResponseData] = useState({});
    const [responseCode, setResponseCode] = useState(0);
    const [responseTime, setResponseTime] = useState(0);

    const onChangePostQuestionDataHandler = (e) => {
        setPostQuestionData(prevState => {
            return ({ ...prevState, [e.target.name]: e.target.value });
        })
        if (e.target.name === "shuffleOptions") {
            setPostQuestionData(prevState => {
                return ({ ...prevState, [e.target.name]: !postQuestionData.shuffleOptions });
            })
        }
    }

    const onSubmitPostQuestionDataHandler = () => {
        setAlert({ status: true, type: "primary", msg: "Processing" })
        console.log(alert)
        setTimeout(() => {
            var start = new Date().getTime();
            axios.post(`http://10.244.0.131:19771/questions/post`, postQuestionData).then(res => {
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
                <div className="column is-4">POST Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:19771/questions/post</div>
            </div>
            <div className="columns box p-0 mt-1 is-centered">
                <div className="column is-6">
                    <div className="">
                        {alert.status && <div className={`notification mb-3 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                        <button onClick={onSubmitPostQuestionDataHandler} className="button mb-3 is-info is-fullwidth">Send</button>
                    </div>
                    <div className="is-light">
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
                                    <td><input name="question" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Question" /></td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Single Choice</td>
                                </tr>
                                <tr>
                                    <td>Score</td>
                                    <td><input name="score" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Score" /></td>
                                </tr>
                                <tr>
                                    <td>Answer 1</td>
                                    <td><input name="answer1" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 1" /></td>
                                </tr>
                                <tr>
                                    <td>Answer 2</td>
                                    <td><input name="answer2" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 2" /></td>
                                </tr>
                                <tr>
                                    <td>Answer 3</td>
                                    <td><input name="answer3" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 3" /></td>
                                </tr>
                                <tr>
                                    <td>Answer 4</td>
                                    <td><input name="answer4" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 4" /></td>
                                </tr>
                                <tr>
                                    <td>Answer 5</td>
                                    <td><input name="answer5" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Answer 5" /></td>
                                </tr>
                                <tr>
                                    <td>Correct Answer</td>
                                    <td><div className="select is-fullwidth">
                                        <select name="correctAnswer" onChange={onChangePostQuestionDataHandler}>
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
                                    <td><input name="correctFeedback" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Correct Feedback" /></td>
                                </tr>
                                <tr>
                                    <td>Wrong Feedback</td>
                                    <td><input name="wrongFeedback" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Wrong Feedback" /></td>
                                </tr>
                                <tr>
                                    <td>Shuffle Options</td>
                                    <td><label className="checkbox">
                                        <input type="checkbox" name="shuffleOptions" value={postQuestionData.shuffleOptions} onChange={onChangePostQuestionDataHandler} />
                                        {" "}Shuffle The Options
                                    </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maximum Learning Time</td>
                                    <td><input name="learningTime" onChange={onChangePostQuestionDataHandler} className="input" type="text" placeholder="Enter Maximum Learning Time in Seconds" /></td>
                                </tr>

                                <tr>
                                    <td>Difficulty</td>
                                    <td><div className="select is-fullwidth">
                                        <select name="difficulty" onChange={onChangePostQuestionDataHandler}>
                                            <option value="NULL">Select Difficulty</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="column is-6">
                    <div className="notification is-dark has-text-centered title is-4">Response Time : {responseTime} ms</div>
                    <div className="notification is-dark has-text-centered title is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title is-4">Response</div>
                    <ReactJson src={responseData} style={{ borderRadius: "5px" }} theme="monokai" />
                    <div className="notification is-dark has-text-centered title mt-4 is-4">Request</div>
                    <ReactJson src={postQuestionData} style={{ borderRadius: "5px" }} theme="monokai" />
                </div>

            </div>
        </div>
    )
}
export default POST;