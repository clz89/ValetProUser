import * as api from '../_api/index';


export const createCar = (subCar) => async (dispatch) => {
  console.log("created")
  const { data } = await api.createCar(subCar);
  dispatch({ type: 'POST', payload: data });
};

export const getCars = () => async (dispatch) => {
  const { data } = await api.getCars();
  const sortedData = data.sort((a, b) => {
    const dateAInMillis = (new Date(a.createdAt)).getTime();
    const dateBInMillis = (new Date(b.createdAt)).getTime();
    
    return dateBInMillis - dateAInMillis;})
  
  dispatch({ type: 'GET', payload: sortedData });
};

export const updateCar = (id, subCar) => async (dispatch) => {
  console.log("updated")
  const { data } = await api.updateCar(id, subCar);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deleteCar = (id) => async (dispatch) => {
  console.log(id)
  const { data } = await api.deleteCar(id);
  dispatch({ type: 'DELETE', payload: id });
};
