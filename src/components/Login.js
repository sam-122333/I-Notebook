import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  let history = useNavigate();
  // let history = unstable_HistoryRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: userDetails.email,
        password: userDetails.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.jwtToken);
      history("/");
    } else {
      alert("Please enter the correct details");
    }
  };
  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            value={userDetails.email}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            value={userDetails.password}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
