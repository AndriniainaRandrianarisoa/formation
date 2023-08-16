import { useApi } from '../../hooks/useApi';

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();



export async function createPost() {

    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const { data } = await api.post('posts', body);
    return data;
}

