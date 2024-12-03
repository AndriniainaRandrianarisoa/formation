import { useEffect, useState } from "react";
import StudentService from "./service";
import { Student } from "../../services/interfaces/Student";

export default function StudentPage() {
  const studentService = new StudentService();
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const response= studentService.loadStudent();
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
