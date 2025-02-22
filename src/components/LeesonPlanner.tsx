import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateLessonContent } from "../utils/gemini";
import jsPDF from "jspdf";

// ✅ Importing UI components from ShadCN
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "./ui/accordion";

const LessonPlanner = () => {
  const [topic, setTopic] = useState("");
  const [lessonPlan, setLessonPlan] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Dummy Authentication Check
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/login");
  }, [navigate]);

  // ✅ AI Lesson Plan Generation
  const handleGenerate = async () => {
    if (!topic.trim()) {
      setErrorMessage("Please enter a topic!");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const prompt = `
      Generate a structured lesson plan for the topic: "${topic}" in JSON format.
      {
        "Topic": "${topic}",
        "Summary": "Brief overview of the lesson.",
        "Date": "Lesson date.",
        "Subject": "Relevant subject.",
        "Grade Level": "Appropriate year group or grade.",
        "Main Topic": "Primary concept covered.",
        "Subtopics": ["Subtopic 1", "Subtopic 2"],
        "Materials Needed": ["Material 1", "Material 2"],
        "Learning Objectives": ["Objective 1", "Objective 2"],
        "Lesson Outline": "Introduction\\nActivities\\nDiscussion\\nReview\\nAssessment",
        "Duration Guide": {
          "Springboard Activity": "xx minutes",
          "Introduction": "xx minutes",
          "Review": "xx minutes",
          "Main Discussion": "xx minutes",
          "Activities": "xx minutes",
          "Assessment": "xx minutes",
          "Others": "xx minutes"
        },
        "Notes": "Additional teaching notes."
      }
      Return only the JSON object with no additional text.
    `;

    try {
      const result = await generateLessonContent(prompt);
      const parsedLessonPlan = JSON.parse(result);
      setLessonPlan(parsedLessonPlan);
    } catch (error) {
      setErrorMessage("Error generating lesson. Please try again.");
      setLessonPlan({});
    } finally {
      setLoading(false);
    }
  };

  // ✅ PDF Download Function
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Lesson Plan", 20, 20);
    let y = 40;

    Object.entries(lessonPlan).forEach(([key, value]) => {
      doc.setFontSize(14);
      doc.text(`${key}:`, 20, y);
      y += 10;
      doc.setFontSize(12);
      if (typeof value === "object") {
        Object.entries(value).forEach(([subKey, subValue]) => {
          doc.text(`${subKey}: ${String(subValue)}`, 30, y);
          y += 10;
        });
      } else {
        doc.text(String(value), 20, y);
      }
      y += 10;
    });

    doc.save(`LessonPlan_${topic}.pdf`);
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold mb-4">AI Lesson Planner</h2>

      {/* ✅ Input Section */}
      <Card className="p-4">
        <Input
          placeholder="Enter Lesson Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          disabled={loading}
        />
        <Button onClick={handleGenerate} className="mt-4" disabled={loading}>
          {loading ? "Generating..." : "Generate Lesson Plan"}
        </Button>
      </Card>

      {/* ✅ Loading State */}
      {loading && <Skeleton className="w-full h-24 mt-4" />}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

      {/* ✅ Lesson Plan Display */}
      {Object.keys(lessonPlan).length > 0 && (
        <Card className="mt-6 p-6">
          <h3 className="text-2xl font-bold mb-4">Generated Lesson Plan</h3>
          <Accordion type="single">
            {Object.entries(lessonPlan).map(([key, value]) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>{key}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    {typeof value === "object" ? JSON.stringify(value, null, 2) : String(value)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button onClick={handleDownloadPDF} className="mt-4">
            Download PDF
          </Button>
        </Card>
      )}
    </div>
  );
};

export default LessonPlanner;



