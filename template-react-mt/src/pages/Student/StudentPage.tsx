import { useEffect, useState } from "react";
import { createStudent, getAllStudents } from "../../services/api/student";

export default function StudentPage() {
  

  useEffect(() => {
    loadStudent()
  }, []);

  const loadStudent = async () => {
    const response = await getAllStudents()
  };

  const create = async () => {
    const params = {
      "userId": "coucou",
      "firstName": "string",
      "lastName": "string",
      "groupeId": "string",
      "dateOfBirth": {},
      "discordWebHook": "string"
    }
    const response = createStudent(params)
  }


  const update = async () => {
    const params = {
      "userId": "coucou",
      "firstName": "string",
      "lastName": "string",
      "groupeId": "string",
      "dateOfBirth": {},
      "discordWebHook": "string"
    }
    const id = "23"
    const response = createStudent(params, id)
  }


    return (
        <>
            <h1> Betise </h1>
         
        </>
    )
}