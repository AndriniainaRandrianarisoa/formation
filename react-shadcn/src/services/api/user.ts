//import { useApi } from '../../hooks/useApi.ts'

//const api = useApi()

export async function login(data) {

  try {
    //const response = await api.post(`login`);
    return {
      status : true,
      datas : data
    };
  } catch (error) {
    return {
      status : false, 
      datas : error
    }
  }
}
