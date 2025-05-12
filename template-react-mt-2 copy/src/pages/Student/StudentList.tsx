import { useEffect, useState } from "react";
import { getAllStudents } from "../../services/api/student";

export default function StudentList() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const loadAllStudents = async () => {
      const response = await getAllStudents();
       
      
      setStudents(response);
    };

    loadAllStudents();
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
