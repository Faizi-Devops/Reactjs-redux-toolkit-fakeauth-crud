import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from "./store/authSlice";

const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((state) => state.auth);



    const alpha = (e) =>{
        setEmail(e.target.value);

    }
    const beta = (e) =>{
        setPassword(e.target.value)

    }
    const onRegister = () =>{
        console.log(email,password)
        dispatch(registerUser({ email, password }));
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="card cardshadow" style={{ width: "24rem" }}>

                    <div className="card-body">
                        <h3 className="card-title text-center mt-3">Registration</h3>
                        <div class="mb-3 mt-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={alpha}/>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="exampleFormControlpassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleFormControlpassword" placeholder="name@example.com" onChange={beta}/>
                        </div>
                        <div className="text-center mt-5">
                        <button type="button" class="btn btn-primary" onClick={onRegister} disabled={isLoading}>{isLoading ? 'Loading...' : 'Register'}</button>

                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {user && <p>Successfully registered user {user.email}!</p>}


                    </div>
                </div>

            </div>

        </div>
    )
}
export default SignUp;