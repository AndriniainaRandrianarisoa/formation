import { useEffect, useState } from "react";
import { Student } from "../../services/interfaces/Student";
import { getAllStudents } from "../../services/api/student";

export default function StudentPage() {

  const [students, setStudents] = useState<Student[]>([]);




  useEffect(() =>  {
    const loadStudents = async () => {
      const response = await getAllStudents();
      console.log("🚀 ~ loadStudents ~ response:", response)
      setStudents(response);
    }
    loadStudents()
   
  }, [])

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
