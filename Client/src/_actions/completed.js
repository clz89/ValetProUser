import * as api from '../_api/index';


export const createComp = (comps) => async (dispatch) => {
  console.log("created")
  const { data } = await api.createComp(comps);
  dispatch({ type: 'POST', payload: data });
};
export const getComps = () => async (dispatch) => {
  const { data } = await api.getComps();
  const sortedData = data.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    
    return dateBInMillis - dateAInMillis;})
  
  dispatch({ type: 'GET', payload: sortedData });
};

export const updateComp = (id, comps) => async (dispatch) => {
  console.log("updated")
  const { data } = await api.updateComp(id, comps);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deleteComp = (id) => async (dispatch) => {
  console.log(id)
  const { data } = await api.deleteComp(id);
  dispatch({ type: 'DELETE', payload: id });
};