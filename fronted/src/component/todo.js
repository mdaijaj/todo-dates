import '../App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../App.css'
import { useNavigate, useParams, Link } from "react-router-dom";

const Todo = () => {
    // const [candidateList, setCandidateList] = useState([])
    // const AllCandidate = async () => {
    //     const response = await axios.get('/allcandidate');
    //     console.log("response", response)
    //     setCandidateList([...response.data.data])
    // }
    
    // const deleteCandidateDetails= async (id)=>{
    //     console.log("id", id)
    //     await fetch(`/deletecandidate/${id}`, {method: "delete"});
    //     console.log("delete dat successfully!")
    //     AllCandidate()
    //     navigate('/landing')
    // }

    // const deleteButton=()=>{
    //     console.log("server is wokring...")
    // }

    const navigate = useNavigate()

    const handleclick=(day)=>{
        console.log("card is wokring...", day)
        localStorage.setItem("day", day)
        navigate('/landing')
    }
    
    const dayData=["Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]

    // useEffect(() => {
    //     // AllCandidate()
    // }, [])


    return (
        <>
        <h1 className='heading'>Weekly Todo</h1>
            <div class="row" >
                {dayData.map((item, index) => {
                    return(
                    <div class="col-sm-3">
                        <div class="card" onClick={()=> handleclick(item)}>
                            <div class="card-body">
                                <h5 class="card-title" >{item}</h5>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div> 
            <div className='addButton'>
            <Link className="btn btn-outline-primary "  onClick={"newCandidate"} to={'/'} >
                + Add new task
            </Link>
            </div>
        </>
    )
}

export default Todo;