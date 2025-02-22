AI Lesson Planner

Overview

AI Lesson Planner is a web application that allows educators to generate structured lesson plans using AI. Users can input a topic, and the application will generate a complete lesson plan, including objectives, materials, and an outline. The lesson plan can then be downloaded as a PDF.

Features

AI-Generated Lesson Plans: Automatically generates structured lesson plans based on user input.

User Authentication: Requires login to access the lesson planner.

PDF Export: Download lesson plans as a formatted PDF.

ShadCN UI Components: Provides a sleek and modern UI.

Tech Stack

Frontend: React.js (with TypeScript)

UI Library: ShadCN UI, Tailwind CSS

Routing: React Router

AI Integration: Google Gemini API

PDF Generation: jsPDF

Installation

Clone the repository

git clone https://github.com/pavankumarpilaka/Lesson_planner.git


cd Lesson_planner

Install dependencies

npm install

Run the development server

npm run dev

Open in your browser

http://localhost:3000

Usage

Enter a topic in the input field.

Click on "Generate Lesson Plan" to fetch an AI-generated lesson.

View the structured lesson details.

Download the lesson as a PDF for offline use.

Deployment

To deploy the app:

npm run build

Then deploy the dist/ folder to your preferred hosting platform (e.g., Vercel, Netlify).

Live:
https://lesson-planner-delta.vercel.app/

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

License

This project is licensed under the MIT License.
