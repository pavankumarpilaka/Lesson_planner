import jsPDF from "jspdf";

export const downloadLessonAsPDF = (title: string, content: string) => {
  const doc = new jsPDF();
  doc.text(title, 10, 10);
  doc.text(content, 10, 20);
  doc.save(`${title}.pdf`);
};
