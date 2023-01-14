import axios from "axios";

const server_port = process.env.JSON_SERVER || 3000;

const postsInst = axios.create({
  baseURL: `http://localhost:${server_port}`,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getPosts = () => postsInst.get('/posts');
export const createPost = (post) => postsInst.post('/posts', {...post});
export const updatePost = (id, post) => postsInst.patch(`/posts/${id}`, {...post});
export const deletePost = (id) => postsInst.delete(`/posts/${id}`);
