import { combineReducers } from 'redux';
import posts from './posts';
import subCars from './subCars';
import updateForm from './updateForm'
import pulls from './pulls'
import outnr from "./outnr"
import completed from './completed';
export default combineReducers({
    posts, subCars, updateForm, pulls, outnr, completed
})