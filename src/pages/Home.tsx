import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center">
      <h2 className="section-title">Welcome to AI Lesson Planner</h2>
      <p className="text-lg mt-4">Generate structured, AI-powered lesson plans effortlessly.</p>
      <Link to="/planner">
        <button className="button button-primary mt-6">Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
