import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../BaseUrl";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [firstName, setFirstName] =useState("");
  const [lastName, setLastName] =useState("");
  const [username, setUsername] =useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);
  
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <input onChange={e=>{
            setFirstName(e.target.value);
          }} />
          <InputBox onChange={e=>{
            setFirstName(e.target.value);
          }} placeholder="John" label={"First Name"} />
          <InputBox onChange={(e)=>{
            setLastName(e.target.value);
          }} placeholder="Doe" label={"Last Name"} />
          <InputBox onChange={(e)=>{
            setUsername(e.target.value);
          }}placeholder="harkirat@gmail.com" label={"Email"} />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value);
          }}placeholder="123456" label={"Password"} type="password" />
          
          <div className="pt-4">
            <Button 
              onPress={async () => {
                try {
                  const response = await axios.post(BASE_URL + "user/signup", {
                    username,
                    firstName,
                    lastName,
                    password
                  });
                  
                  if (response.status === 200) {
                    localStorage.setItem("token", response.data.token);
                    toast.success("Signup successful!");
                    setTimeout(() => {
                      navigate("/dashboard");
                    }, 2000);
                  } else {
                    alert("Signup failed");
                  }
                } catch (error) {
                  // Handle the error here
                  console.error("Signup error:", error);
                  alert("An error occurred during signup. Please try again.");
                }
              }} 
              label={"Sign up"} 
            />
          </div>

          <BottomWarning 
            label={"Already have an account?"} 
            buttonText={"Sign in"} 
            to={"/signin"} 
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
