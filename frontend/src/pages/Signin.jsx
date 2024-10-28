import { useState, useEffect } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../BaseUrl";
import Footer from "../components/Footer";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check if token exists in localStorage and redirect to dashboard if it does
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to sign in"} />
            <InputBox 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="harkirat@gmail.com" 
              label={"Email"} 
            />
            <InputBox 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="********" 
              label={"Password"} 
              type="password" 
            />
            <div className="pt-4">
              <Button
                label={"Sign In"}
                onPress={async () => {
                  try {
                    const response = await axios.post(BASE_URL + "user/signin", {
                      username,
                      password,
                    });
                    if(response.status === 200){
                      localStorage.setItem("token", response.data.token);
                      alert("Sign-in successful");
                      navigate("/dashboard");
                    }else{
                      alert("Sign-in failed");
                    }
                  } catch (error) {
                    console.error("Error signing in:", error);
                  }
                }}
              />
            </div>
            <div>
              <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
