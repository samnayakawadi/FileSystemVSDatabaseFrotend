const POST = () => {
    return (
        <div>
            <div className="columns notification is-dark is-centered has-text-centered m-1">
                <div className="column is-4">End-Point</div>
                <div className="column is-7">http://localhost:1977/questions/post</div>
            </div>
            <div className="mt-5 notification is-light">
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
                            <td><input className="input" type="text" placeholder="Enter Question" /></td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>Single Choice</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td><input className="input" type="text" placeholder="Enter Score" /></td>
                        </tr>
                        <tr>
                            <td>Answer 1</td>
                            <td><input className="input" type="text" placeholder="Enter Answer 1" /></td>
                        </tr>
                        <tr>
                            <td>Answer 2</td>
                            <td><input className="input" type="text" placeholder="Enter Answer 2" /></td>
                        </tr>
                        <tr>
                            <td>Answer 3</td>
                            <td><input className="input" type="text" placeholder="Enter Answer 3" /></td>
                        </tr>
                        <tr>
                            <td>Answer 4</td>
                            <td><input className="input" type="text" placeholder="Enter Answer 4" /></td>
                        </tr>
                        <tr>
                            <td>Answer 5</td>
                            <td><input className="input" type="text" placeholder="Enter Answer 5" /></td>
                        </tr>
                        <tr>
                            <td>Correct Answer</td>
                            <td><div className="select is-fullwidth">
                                <select>
                                    <option>Select Correct Answer</option>
                                    <option>Answer 1</option>
                                    <option>Answer 2</option>
                                    <option>Answer 3</option>
                                    <option>Answer 4</option>
                                    <option>Answer 5</option>
                                </select>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Correct Feedback</td>
                            <td><input className="input" type="text" placeholder="Enter Correct Feedback" /></td>
                        </tr>
                        <tr>
                            <td>Wrong Feedback</td>
                            <td><input className="input" type="text" placeholder="Enter Wrong Feedback" /></td>
                        </tr>
                        <tr>
                            <td>Shuffle Options</td>
                            <td><label className="checkbox">
                                <input type="checkbox" />
                                {" "}Shuffle The Options
                            </label>
                            </td>
                        </tr>
                        <tr>
                            <td>Maximum Learning Time</td>
                            <td><input className="input" type="text" placeholder="Enter Maximum Learning Time" /></td>
                        </tr>

                        <tr>
                            <td>Difficulty</td>
                            <td><div className="select is-fullwidth">
                                <select>
                                    <option>Select Difficulty</option>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <button className="button is-success is-fullwidth">Create Question</button>
            </div>
        </div>
    )
}
export default POST;