import { getAllStudents } from "../../services/api/student";
import { Student } from "../../services/interfaces/Student";


export default class service {

  loadStudent = async ():Promise<Student[]> => {
    const response = await getAllStudents()
    return response 
  };

}
