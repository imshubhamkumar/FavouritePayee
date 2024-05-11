import logoImg from "@/app/assets/zing-logo.png";
import Image from "next/image";
import { useState } from "react";
import { EyeSlash, Eye, X } from "react-bootstrap-icons";
const Signup = () => {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [email, setEmail] = useState();
  const [pnone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [isPassShow, setIsPassShow] = useState(false);
  const [iscPassShow, setIscPassShow] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = () => {
    if (!fname || !lname || !email || !pnone || !password || !cpassword) {
      setErrorMsg("All fields must be filled");
      setError(true);
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Enter Valid email id");
      setError(true);
      return false;
    }
    if (password !== cpassword) {
      setErrorMsg("Password not matching");
      setError(true);
      return false;
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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
          <div className="fullname-container d-flex flex-row mb-2">
            <div class="input-group mr-2 login-btn">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                autocomplete="off"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div class="input-group login-btn">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon1"
                autocomplete="off"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
          </div>
          <div class="input-group mb-2">
            <input
              type="email"
              class="form-control"
              placeholder="Email Id"
              aria-label="Email Id"
              aria-describedby="basic-addon1"
              autocomplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="input-group mb-2">
            <input
              type="text"
              class="form-control"
              placeholder="Phone/Mobile No."
              aria-label="Phone/Mobile No."
              aria-describedby="basic-addon1"
              autocomplete="off"
              pattern="[789][0-9]{9}"
              value={pnone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="input-group mb-2">
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
          <div class="input-group mb-2">
            <input
              type={iscPassShow ? "text" : "password"}
              class="form-control"
              placeholder="Confirm Password"
              aria-label="Confirm Passwor"
              aria-describedby="basic-addon1"
              autocomplete="off"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <span
              class="input-group-text"
              id="basic-addon1"
              onClick={() => setIscPassShow(!iscPassShow)}
            >
              {iscPassShow ? <EyeSlash /> : <Eye />}
              {/* <EyeSlash /> */}
            </span>
          </div>
          <button className="btn btn-primary " onClick={() => handleSignup()}>
            Signup
          </button>
          <div className="switch-page mt-3">Already have an account?</div>
          <div className="switch-page">
            {/* <Link
              href={{
                pathname: "auth",
                query: { type: "login" },
              }}
            > */}
            <a href="?type=login">Goto Login Page</a>
            {/* </Link> */}
            {isError && (
              <span className="error-msg mt-4">
                {errorMsg}
                <X className="fs-4 close-btn" onClick={() => closeError()} />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
