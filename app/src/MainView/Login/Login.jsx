import { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Login.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSumbitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSumbitHandler} className="login">
      <div className="login__header">
        <img className="login__logo" src={logo} alt="logo" />
        <Typography className="login__header_text" variant="h6" gutterBottom>
          Login
        </Typography>
      </div>

      <TextField
        id="email"
        label="Email"
        variant="standard"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="standard"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        disabled={!password || !email}
        type="submit"
        className={!password || !email ? "not_work_login" : "login__button"}
        value="Login"
      />
      <Typography variant="subtitle1" gutterBottom>
        have an account? <Link to="/signup">create an account</Link>
      </Typography>
    </form>
  );
}

export default Login;
