import axios from "axios";

const postsInst = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    "Content-Type": "application/json"
  }
});

export const getPosts = () => postsInst.get('/posts');
export const createPost = (post) => postsInst.post('/posts', {...post});
export const updatePost = (id, post) => postsInst.patch(`/posts/${id}`, {...post});
export const deletePost = (id) => postsInst.delete(`/posts/${id}`);
