
export const upForm = (id) =>  (dispatch) => {
  console.log(id)
  dispatch({ type: 'UPFORM', payload: id });
};
export const upReset = () =>  (dispatch) => {
  dispatch({ type: 'RESET'});
};