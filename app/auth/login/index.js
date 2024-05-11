import logoImg from "@/app/assets/zing-logo.png";
import Image from "next/image";
import { useState } from "react";
import { EyeSlash, Eye, X } from "react-bootstrap-icons";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isPassShow, setIsPassShow] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMsg("All fields must be filled");
      setError(true);
    }
  };

  const closeError = () => {
    setError(false);
    setErrorMsg("");
  };
  return (
    <>
      {" "}
      <div className="login-container justify-content-center p-4">
        <div className="logo-container">
          {/* <span className="logo-text text-primary fw-bolder fs-1">ZING</span> */}
          <Image src={logoImg} width={150} alt="Zing Logo" />
        </div>
        <div className="login-data-container p-4 d-flex flex-column">
          <div className="header-details mb-3">
            <div className="hello-text">Hello Again!</div>
            <span className="welcom-msg">welcome back you've been missed</span>
          </div>
          <div class="input-group mb-2 login-btn">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              autocomplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="input-group login-btn">
            <input
              type={isPassShow ? "text" : "password"}
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              autocomplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              class="input-group-text"
              id="basic-addon1"
              onClick={() => setIsPassShow(!isPassShow)}
            >
              {isPassShow ? <EyeSlash /> : <Eye />}
              {/* <EyeSlash /> */}
            </span>
          </div>
          <div className="forgot-pass mb-2 fs-6">
            <span className="forgot-text-container">Unable to login?</span>
          </div>
          <button
            className="btn btn-primary login-btn"
            onClick={() => handleLogin()}
          >
            Login
          </button>
          <div className="switch-page mt-3">Don't have an account?</div>
          <div className="switch-page">
            {/* <Link
              href={{
                pathname: "auth",
                query: { type: "signup" },
              }}
            > */}
            <a href="?type=signup">Goto signup Page</a>
            {/* </Link> */}
          </div>
          {isError && (
            <span className="error-msg mt-4">
              {errorMsg}
              <X className="fs-4 close-btn" onClick={() => closeError()} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
