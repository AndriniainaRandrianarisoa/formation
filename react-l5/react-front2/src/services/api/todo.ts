import { useApi } from '../../hooks/useApi.ts'

const api = useApi()


export async function getTodos() {
  const response = await api.get(`todos`)
  return response
}

export async function postTodos(body) {
  const response = await api.post(`todos`, body)
  return response
}

export async function getTodosById(id) {
  const response = await api.get(`todos/${id}`)
  return response
}


