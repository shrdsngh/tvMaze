import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const[username, usernameUpdate] = useState("");
    const[password, passwordUpdate] = useState("");
    const[email, emailUpdate] = useState("");

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
         //  implement Login 
         //  console.log("proceed");
          fetch("http://localhost:8000/user/"+username).then((res)=>{
            return res.json();
          }).then((resp)=>{
            //  console.log(resp)
             if(Object.keys(resp).length===0){
                toast.error("Username not found");
             } else {
                if(resp.password===password){
                   if(resp.email===email){
                    toast.success("Login successful");
                    sessionStorage.setItem("username", username);
                    usenavigate('/search');
                   } else {
                    toast.error("Invalid credentials");
                   }
                }else{
                    toast.error("Incorrect credentials");
                }
             }
          }).catch((err)=>{
            toast.error("Login failed due to :"+err.message); 
          })
        }
    }

    const validate = () => {
        let result = true;
        if(username === '' || username === null){
            result = false;
            toast.warning('Please enter username');
        }
        if(password === '' || password === null){
            result = false;
            toast.warning('Please enter password');
        }
        return result;
    }

    return(
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <form onSubmit={ProceedLogin} className="container">
              <div className="card">
                <div className="card-header">
                  <h2>User Login</h2>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>User Name<span className="errmsg">*</span></label>
                    <input value={username} onChange={e=>usernameUpdate(e.target.value)} className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>E Mail<span className="errmsg">*</span></label>
                    <input type="email" value={email} onChange={e=>emailUpdate(e.target.value)} className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label>Password<span className="errmsg">*</span></label>
                    <input type="password" value={password} onChange={e=>passwordUpdate(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="card-footer">
                   <button type="submit" className="btn btn-primary">Login</button>
                   <Link className="btn btn-success" to={'/registration'}>New User</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
}

export default Login;