import * as api from '../models/api.js';

export const getPosts = async (req, res) => {
  try {
    const { data } = await api.getPosts();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  try {
    const { data } = await api.createPost(post);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
  }
}

export const updatePost = async (req, res) => {
  const post = req.body;
  const { id } = req.params;
  try {
    const { data } = await api.updatePost(id, post);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await api.deletePost(id);
    res.status(200).json(`Post with id ${id} successfully deleted.`);
  } catch (error) {
    console.error(error);
  }
}
