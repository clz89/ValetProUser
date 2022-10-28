import * as api from '../_api/index';


export const createOut = (outnr) => async (dispatch) => {
  console.log("created")
  const { data } = await api.createOut(outnr);
  dispatch({ type: 'POST', payload: data });
};
export const getOuts = () => async (dispatch) => {
  const { data } = await api.getOuts();
  
  
  dispatch({ type: 'GET', payload: data });

};

export const updateOut = (id,outnr) => async (dispatch) => {
  console.log("updated")
  const { data } = await api.updateOut(id, outnr);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deleteOut = (id) => async (dispatch) => {
  console.log(id)
  const { data } = await api.deleteOut(id);
  dispatch({ type: 'DELETE', payload: id });
};