import { useState, useEffect } from "react"
import axios from "axios"
import ReactJson from 'react-json-view'
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const DELETE = () => {
    const {userDetails} = useContext(UserContext)
    const [getAllQuestionsData, setGetAllQuestionsData] = useState({})
    const [isEmptyObject, setIsEmptyObject] = useState(true);
    const [alert, setAlert] = useState({ status: false });
    const [questionId, setQuestionId] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);
    const [responseCode, setResponseCode] = useState(0);
    const [responseTime, setResponseTime] = useState(0);
    const [dbPort, setDbPort] = useState(1977);

    useEffect(()=>{
        if(userDetails.currentDatabase === "fileSystem"){
            setDbPort(1977)
        }
        else{
            setDbPort(2007)
        }
    }, [userDetails])

    const onLoadQuestionDataHandler = () => {
        setIsEmptyObject(true);
        setIsDeleted(false)
        setAlert({ status: true, type: "primary", msg: "Sending Delete Request" })
        setTimeout(() => {
            
            var start = new Date().getTime();
            axios.delete(`http://10.244.0.131:${dbPort}/questions/delete/single/${questionId}`).then(res => {
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
        <div>
            <div className="columns notification is-dark is-centered has-text-centered m-1">
                <div className="column is-4">DELETE Request End-Points</div>
                <div className="column is-7">http://10.244.0.131:{dbPort}/questions/delete/single/{questionId}</div>
            </div>
            <div className="columns is-centered">
                <div className="column pt-5 p-4 is-6 mt-1">
                    <input className="input mt-5 mb-2 is-fullwidth" type="text" name="questionId" onChange={(e) => { setQuestionId(e.target.value) }} placeholder="Enter Question ID" />
                    {isEmptyObject && <div className="notification mb-2 has-text-centered is-info">Enter Valid Question ID to Delete It</div>}
                    {isDeleted && <div className="notification mb-2 has-text-centered is-success">Question Data Deleted Successfully</div>}
                    {alert.status && <div className={`notification mb-2 has-text-centered is-${alert.type}`}>{alert.msg}</div>}
                    <button onClick={onLoadQuestionDataHandler} className="button mb-3 is-info is-fullwidth">Request</button>
                    
                </div>

                <div className="column is-6 p-4 mt-5">
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response Time : {responseTime} ms</div>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response Code : {responseCode}</div>
                    <div className="notification is-dark has-text-centered title mt-3 is-4">Response</div>
                    <ReactJson src={getAllQuestionsData} style={{ borderRadius: "5px" }} theme="monokai" />
                </div>
            </div>
        </div>
    )
}
export default DELETE;