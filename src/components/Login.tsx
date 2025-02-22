import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded credentials
    if (email === "demouser" && password === "demopass") {
      localStorage.setItem("user", email);
      navigate("/planner"); // Redirect after successful login
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="section-title">Login</h2>

      {/* Display Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email Input */}
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        {/* Login Button */}
        <button type="submit" className="button button-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
