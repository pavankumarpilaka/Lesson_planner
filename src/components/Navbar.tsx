import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">Lesson Planner</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        {isLoggedIn && <Link to="/planner" className="hover:underline">Planner</Link>}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="button button-secondary">
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
