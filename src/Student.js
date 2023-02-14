import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo,updateTodo,deleteTodo} from "./store/todoSlice";

const Student = () => {
    const count = useSelector((state) => state.todoing.value)
    const dispatch = useDispatch()
    const [naming, setNaming] = useState("")
    const [classing, setClassing] = useState("")
    const [batching, setBatching] = useState("")
    const [yearing, setYearing] = useState("")

    const alpha = (e) => {
        setNaming(e.target.value);

    }
    const beta = (e) => {
        setClassing(e.target.value)

    }
    const gema = (e) => {
        setBatching(e.target.value)

    }
    const peta = (e) => {
        setYearing(e.target.value)

    }
    const onAddHandler = () => {
        if (naming && classing && yearing && batching !== "") {
            let addStudent = {
                Name: naming,
                Class: classing,
                Batch: batching,
                Year: yearing,
            }
            dispatch(addTodo(addStudent))
            setClassing("")
            setBatching("")
            setYearing("")
            setNaming("")
            

        }
        else {
            alert("Please fill all the params")
        }

    }
    const onDeleteHandler = (indexing) =>{
        
        dispatch(deleteTodo(indexing))

    }

    return (
        <div>
            <div className="d-flex justify-content-center mt-3">
                <div className="card" style={{ width: "24rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center">Student App</h5>
                        <div className="mb-3 mt-4">
                            <input type="email" className="form-control" value={naming} placeholder="Name" onChange={alpha} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="email" className="form-control" value={classing} placeholder="Class" onChange={beta} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="email" className="form-control" value={batching} placeholder="Batch" onChange={gema} />
                        </div>
                        <div className="mb-3 mt-4">
                            <input type="email" className="form-control" value={yearing} placeholder="Year" onChange={peta} />
                        </div>
                        <div className="text-center mt-5">
                            <button type="button" className="btn btn-primary" onClick={onAddHandler}>Add Student</button>

                        </div>
                    </div>
                </div>

            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">batch</th>
                        <th scope="col">year</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>

                    </tr>
                </thead>
                {
                    count.map((value,index) => {
                        return (
                            <tbody>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.Name}</td>
                                    <td>{value.Class}</td>
                                    <td>{value.Batch}</td>
                                    <td>{value.Year}</td>
                                    <td>
                                    <button type="button" class="btn btn-outline-danger" onClick={()=>onDeleteHandler(index)}>Delete</button>
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-outline-success" onClick={()=>onEditHandler(value,index)}>Update</button>
                                    </td>
                                </tr>

                            </tbody>

                        )
                    })
                }

            </table>

        </div>
    )
}
export default Student;