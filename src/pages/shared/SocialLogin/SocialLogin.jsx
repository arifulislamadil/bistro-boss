import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
  
    let from = location.state?.from?.pathname || "/";



    const handleGoogleSingin =()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email}
            fetch("http://localhost:5000/users",{
                method: "POST",
                headers:{
                  'content-type': 'application/json'
                },
                body:JSON.stringify(saveUser)
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.insertedId){
                
                    navigate(from, {replace: true});
                }
              })








            
        }).catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center my-4">
        <button onClick={handleGoogleSingin} className="btn btn-circle">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
