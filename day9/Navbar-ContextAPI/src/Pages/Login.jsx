import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { isAuth, handleLogin } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={handleLogin}>LOGIN</button>
    </>
  );
}

export default Login;
