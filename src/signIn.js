import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { SignUser } from "./store/authSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((state) => state.auth);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const alpha = (e)=>{
        setEmail(e.target.value);

    }
    const beta = (e) =>{
        setPassword(e.target.value)

    }
    const onSignIn = () =>{
        console.log(email,password)
        dispatch(SignUser({ email, password }));
    }
    return (
        <div>
            <div className="d-flex justify-content-center mt-5 mb-5 ">
                <div className="card" style={{ width: "24rem" }}>

                    <div className="card-body">
                        <h5 className="card-title text-center mt-3">Sign In</h5>
                        <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={alpha}/>
                        </div>
                        <div className="mb-3 mt-3">
                            <label for="exampleFormPassword" className="form-label">Email address</label>
                            <input type="password" className="form-control" id="exampleFormPassword" placeholder="**********" onChange={beta}/>
                        </div>

                        <div className="text-center mt-5">
                        <button type="button" class="btn btn-primary" onClick={onSignIn}>Sign In</button>


                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {user && <p>Successfully Login user {user.email}!</p>}
                        
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
export default SignIn;