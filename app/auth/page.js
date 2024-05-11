"use client";

import Login from "./login";
import { useSearchParams } from "next/navigation";
import Signup from "./signup";
import "./style.css";

const Auth = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type") || "login";
  return (
    <>
      <div className="auth-page-container">
        {type === "login" ? <Login /> : <Signup />}
      </div>
    </>
  );
};

export default Auth;
