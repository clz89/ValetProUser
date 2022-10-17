import * as api from '../_api/index';


export const createPull = (pulls) => async (dispatch) => {
  console.log("created")
  const { data } = await api.createPull(pulls);
  dispatch({ type: 'POST', payload: data });
};
export const getPulls = () => async (dispatch) => {
  const { data } = await api.getPulls();
  const sortedData = data.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    
    return dateBInMillis - dateAInMillis;})
  
  dispatch({ type: 'GET', payload: sortedData });
  
};

export const updatePull = (id, pulls) => async (dispatch) => {
  console.log("updated")
  const { data } = await api.updatePull(id, pulls);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deletePull = (id) => async (dispatch) => {
  console.log(id)
  const { data } = await api.deletePull(id);
  dispatch({ type: 'DELETE', payload: id });
};