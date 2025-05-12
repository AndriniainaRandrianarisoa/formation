import { useApi } from "../../hooks/useApi";

// GET
// POST
// PUT
// PATCH
// DELETE

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllStudents() {
  try {
    const { data } = await api.get(`student`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
