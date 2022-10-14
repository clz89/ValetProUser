import axios from 'axios';

const url = 'http://localhost:8000/posts';
const url2 = 'http://localhost:8000/subCars';
const url3 = 'http://localhost:8000/pulls';
const url4 = 'http://localhost:8000/outnr';
const url5 = 'http://localhost:8000/completed';


export const createPost = (post) => axios.post(url, post);

export const getPosts = () => axios.get(url);

export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const createCar = (subCar) => axios.post(url2, subCar);

export const getCars= () => axios.get(url2);

export const updateCar = (id, subCar) => axios.patch(`${url2}/${id}`, subCar);

export const deleteCar = (id) => axios.delete(`${url2}/${id}`);

export const createPull = (pulls) => axios.post(url3, pulls);

export const getPulls= () => axios.get(url3);

export const updatePull = (id, pulls) => axios.patch(`${url3}/${id}`, pulls);

export const deletePull = (id) => axios.delete(`${url3}/${id}`);

export const createOut = (outnr) => axios.post(url4, outnr);

export const getOuts = () => axios.get(url4);

export const updateOut = (id, outnr) => axios.patch(`${url4}/${id}`, outnr);

export const deleteOut = (id) => axios.delete(`${url4}/${id}`);

export const createComp = (comps) => axios.post(url5, comps);

export const getComps = () => axios.get(url5);

export const updateComp = (id, comps) => axios.patch(`${url5}/${id}`, comps);

export const deleteComp = (id) => axios.delete(`${url5}/${id}`);