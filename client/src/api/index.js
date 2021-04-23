import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const fetchComments = () => API.get('/comment');
export const fetchNotifications = () => API.get('/notifs');
export const fetchQuestions = () => API.get('/questions');



export const createPost = (newPost) => API.post('/posts', newPost);
export const createComment = (newComment) => API.post('/comment', newComment);
export const createNotification = (newComment) => API.post('/notifs', newComment);
export const createQuestion = (newComment) => API.post('/questions', newComment);




export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const updateNotification = (id, updatedPost) => API.patch(`/notifs/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
