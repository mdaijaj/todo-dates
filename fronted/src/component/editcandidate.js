
import React, { useState } from 'react';
import { useNavigate , useParams} from "react-router-dom";
import '../App.css';
import axios from 'axios';

const EditTask = (props) => {
    console.log("props", props)
    const [candidate, setCandidate] = useState({
        taskName: "",
        description: "",
        due: "",
        status: ""
    });
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)


    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        console.log("candidate", candidate)
        setCandidate({ ...candidate, [name]: value })  //[] dynamic data for
    }

    const editCandidate = async (e) => {
        e.preventDefault();
        const { taskName, description, status, due } = candidate;
        
        const result =await axios.put(`/editcandidate/${id}`, candidate);
        console.log("result", result)

        if (result.status === 400 || !result) {
            window.alert("Invalid candidate");
            console.log("Invalid candidate")
        }
        else {
            window.alert("candidate details updated successfully!")
            console.log("candidate details updated successfully")
            navigate('/landing')
        }
    }

    return (
        <>
            <h1>Update Candidate</h1>
            <div class="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="container" style={{ width: "500px"}}>
                
                <form style={{boxShadow: "5px 5px 5px 5px", color: "lightgray", padding: "30px", height: "600px"}}>
                <h5> Add Edit Task</h5>

                        <div className="form-row">
                            <div className="form-group col-md-10">
                                <label for="inputEmail4">Task Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleInput}
                                    name='taskName'
                                    id="inputtaskName4"
                                    value={candidate.taskName}
                                    placeholder=" Enter taskName...."
                                />
                            </div>

                            <div className="form-group col-md-10">
                                <label for="inputAddress">Description: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={handleInput}
                                    name='description'
                                    id="inputdescription"
                                    value={candidate.description}
                                    placeholder="Enter description..."
                                />
                            </div>
                            {console.log("candidate", candidate)}
                            <div className="form-group col-md-10">
                                <label for="inputDate">Due</label>
                                <input
                                    type="Date"
                                    className="form-control"
                                    onChange={handleInput}
                                    name='due'
                                    id="inputDate"
                                    value={candidate.date}
                                    placeholder="Enter date of birth..."
                                />
                            </div>

                            <div className="form-group col-md-10">
                                <label class="" for="inputGroupSelect01">Status</label>
                                <select class="custom-select" id="inputGroupSelect01" onChange={handleInput} name="state">
                                    <option selected>Choose...</option>
                                    <option  value={candidate.status} onChange={handleInput}>Pending</option>
                                    <option  value={candidate.status} onChange={{handleInput}}>Completed</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={editCandidate}>Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditTask;