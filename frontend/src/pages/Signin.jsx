import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
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
              onPress={async () => {
                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                  username,
                  password,
                });
                localStorage.setItem("token", response.data.token);
              }} 
              label={"Sign In"} 
            />
          </div>
          <div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
