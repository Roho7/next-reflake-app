import { useState } from "react";
import axios from "axios";
import { loginURL } from "../../config/URLs/URL";
import { useSetRecoilState } from "recoil";
import { usernameState } from "../../config/atoms/atoms";

function Login() {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const setRecoilUsername = useSetRecoilState(usernameState);
  const { username, password } = loginInfo;

  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <div className="h-full flex items-center">
      <div className="bg-base-50 p-4 flex flex-col gap-6">
        <h1 className="text-4xl">Login</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
