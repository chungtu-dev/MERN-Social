import axios from 'axios';

const URL = 'http://localhost:5000'

// export const fetchPosts = () => axios.get(`${URL}/posts`)
export const fetchPosts = async () => {
    try {
        const data = await axios.get(`${URL}/posts`)
        console.log('aaaa',data.data);
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (payload) => axios.post(`${URL}/posts`, payload)

export const updatedPost = (payload) => axios.post(`${URL}/posts/update`, payload)

export const deletedPost = (payload) => axios.post(`${URL}/posts/delete/:id`, payload)