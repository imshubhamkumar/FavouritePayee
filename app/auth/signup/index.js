import logoImg from "@/app/assets/zing-logo.png";
import Image from "next/image";
const Signup = () => {
  return (
    <>
      {" "}
      <div className="login-container d-flex flex-row justify-content-center p-4">
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
            />
          </div>
          <div class="input-group mb-2">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              autocomplete="off"
            />
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <div class="input-group mb-2">
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              aria-label="Confirm Passwor"
              aria-describedby="basic-addon1"
              autocomplete="off"
            />
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <button className="btn btn-primary ">Signup</button>
          <div className="switch-page mt-3">Already have an account?</div>
          <div className="switch-page">
            <a>Goto Login Page</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
