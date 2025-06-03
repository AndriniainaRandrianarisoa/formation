import { useApi } from "../../hooks/useApi";

// GET
// POST
// PUT
// PATCH
// DELETE

const api = useApi();

export async function getUsers() {
  try {
    const { data } = await api.get("user");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(payload) {
  try {
    const { data } = await api.post("user", payload);

    return data;
  } catch (error) {
    console.log(error);
  }
}
