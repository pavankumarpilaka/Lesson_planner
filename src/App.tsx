import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import LessonPlanner from "./components/LeesonPlanner";
import RequireAuth from "./components/RequireAuth";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Accordion } from "./components/ui/accordion";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protect Lesson Planner Route */}
        <Route path="/planner" element={<RequireAuth><LessonPlanner /></RequireAuth>} />
      </Routes>
    </Router>
  );
};

export default App;
