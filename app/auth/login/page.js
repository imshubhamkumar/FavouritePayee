import logoImg from "@/app/assets/zing-logo.png";
import Image from "next/image";
const Login = () => {
  return (
    <>
      {" "}
      <div className="login-container d-flex flex-row justify-content-center p-4">
        <div className="logo-container">
          {/* <span className="logo-text text-primary fw-bolder fs-1">ZING</span> */}
          <Image src={logoImg} width={150} alt="Zing Logo" />
        </div>
        <div className="login-data-container p-4 d-flex flex-column">
          <div class="input-group mb-3 login-btn">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group login-btn">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <div className="forgot-pass mb-3 fs-6">
            <span className="forgot-text-container">Unable to login?</span>
          </div>
          <button className="btn btn-primary login-btn">Login</button>
          <div className="switch-page mt-3">Don't have an account?</div>
          <div className="switch-page">
            <a>Goto signup Page</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
