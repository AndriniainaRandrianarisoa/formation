import { useEffect, useState } from "react";
import { Student } from "../../services/interfaces/Student";
import { getAllStudents } from "../../services/api/student";

export default function StudentPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const response = getAllStudents();
    setStudents(response);
  }, []);

  return (
    <>
      <h1> Student Liste </h1>
      {students.map((student, index) => (
        <div>
          {student.firstName} {student.lastName} {student.groupe.name}
        </div>
      ))}
    </>
  );
}
