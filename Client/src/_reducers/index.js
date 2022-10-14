import { combineReducers } from 'redux';
import posts from './posts';
import subCars from './subCars';
import updateForm from './updateForm'
import pulls from './pulls'
import outnr from "./outnr"
import completed from './completed';
import auth from './auth';
import message from './message';

export default combineReducers({
    posts, subCars, updateForm, pulls, outnr, completed, auth, message
})