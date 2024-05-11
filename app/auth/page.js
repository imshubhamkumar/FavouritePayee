import Login from "./login/page";
import Signup from "./signup";
import "./style.css";
const Auth = () => {
  return (
    <>
      <div className="auth-page-container">
        {/* <Login /> */}
        <Signup />
      </div>
    </>
  );
};

export default Auth;
