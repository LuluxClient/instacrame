import axios from "axios";

const API_URL = "https://instacrameapi-production.up.railway.app/api";

export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/guy`);
    return response.data;
};

export const getUserById = async (id) => {
    const response = await axios.get(`${API_URL}/guy/${id}`);
    return response.data;
};

export const createUser = async (username, description) => {
    const response = await axios.post(`${API_URL}/guys`, {
        data: {
            username,
            description,
        },
    });
    return response.data;
};

export const updateUser = async (id, username, description) => {
    const response = await axios.put(`${API_URL}/guy/${id}`, {
        data: {
            username,
            description,
        },
    });
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`${API_URL}/guy/${id}`);
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const getPostById = async (id) => {
    const response = await axios.get(`${API_URL}/post/${id}`);
    return response.data;
};

export const createPost = async (content) => {
    const response = await axios.post(`${API_URL}/posts`, {
        data: {
            content,
        },
    });
    return response.data;
};

export const updatePost = async (id, content) => {
    const response = await axios.put(`${API_URL}/post/${id}`, {
        data: {
            content,
        },
    });
    return response.data;
};

export const deletePost = async (id) => {
    const response = await axios.delete(`${API_URL}/post/${id}`);
    return response.data;
};