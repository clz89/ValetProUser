import * as api from '../api/index';


export const createCar = (subCar) => async (dispatch) => {
  console.log("created")
  const { data } = await api.createCar(subCar);
  dispatch({ type: 'POST', payload: data });
};

export const getCars = () => async (dispatch) => {
  const { data } = await api.getCars();
  dispatch({ type: 'GET', payload: data });
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
