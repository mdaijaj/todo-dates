
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';


const NewTask = () => {
    const [ user, setUser] = useState({
        taskName: "",
        description: "",
        due: "",
        status: ""
    });
    const navigate = useNavigate()


    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })  //[] dynamic data for
    }

    const postSingup = async (e) => {
        e.preventDefault();
        const { taskName, description, due, status } = user;
        console.log(taskName, description, due, status, "kkkk")

        const regInf={
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                taskName, description, due, status
            })
        }
        
        const res= await fetch('/newcandidate', regInf);
        const result= await res.json()
        console.log("result", result)

        if (res.status === 400 || !res) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else {
            window.alert("Registration is successfully!")
            console.log("Registration is successfully")
            navigate('/todo')
        }
    }


    return (
        <>
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
                                    value={user.taskName}
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
                                    value={user.description}
                                    placeholder="Enter description..."
                                />
                            </div>

                            <div className="form-group col-md-10">
                                <label for="inputDate">Due</label>
                                <input
                                    type="Date"
                                    className="form-control"
                                    onChange={handleInput}
                                    name='due'
                                    id="inputDate"
                                    value={user.date}
                                    placeholder="Enter date of birth..."
                                />
                            </div>

                            <div className="form-group col-md-10">
                                <label class="" for="inputGroupSelect01">Status</label>
                                <select class="custom-select" id="inputGroupSelect01" onChange={handleInput} name="state">
                                    <option selected>Choose...</option>
                                    <option value={"candidate.state"}>Pending</option>
                                    <option value={"candidate.state"}>Completed</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={postSingup}>Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewTask;