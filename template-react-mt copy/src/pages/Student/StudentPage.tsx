import { useEffect, useState } from "react";
import { getAllStudents } from "../../services/api/student";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  groupe : {
    name : string
  }
}


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
