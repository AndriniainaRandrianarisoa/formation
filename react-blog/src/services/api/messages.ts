import { useApi } from "../../hooks/useApi.ts";

const api = useApi();



export async function createNewMessage(body: any) {
  console.log("🚀 ~ file: messages.ts:8 ~ createNewMessage ~ body:", body)
  try {
    const response = body
    return {
      datas: response,
      status: 200
    };
  } catch (error) {
    return error;
  }
}
