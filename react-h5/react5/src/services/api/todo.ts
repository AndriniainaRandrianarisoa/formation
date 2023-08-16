import { useApi } from '../../hooks/useApi';

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getTodos() {
    try {
        const { data } = await api.get('todos');
        return data;
    } catch(err) {
        console.log(err)
        return [];
    }
}


export async function login() {

    const body:any = {
        email : 'amine@alt.bzh',
        password : 2236
    }

    try {
        const { data } = await api.post('todos', body);
        return data;
       
    } catch(err) {
        console.log(err)
        return [];
    }
}
