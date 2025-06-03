import { useEffect, useState } from "react";
import { getAllStudents } from "../../services/api/student";
import { userStore } from "../../stores/user";


export default function StudentList() {
  const [students, setStudents] = useState<any[]>([]);


  // Getters (sélecteurs)
  const user = userStore((state) => state.user);
  console.log("🏀🍗🦖 ~ StudentList ~ user:", user)

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
      <h1> Bonjour ange {user.email} </h1>
      {students.map((student, index) => (
        <div key={index}>
          {student.firstName} {student.lastName} {student.groupe.name}
        </div>
      ))}
    </>
  );
}
