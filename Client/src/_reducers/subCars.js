import {POST, GET, UPDATE, DELETE} from "../_actions/subCars"

export default (subCars = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...subCars, action.payload];
        case 'GET':
            return action.payload;
        case 'UPDATE':
            return subCars.map(subCar => subCar._id === action.payload._id ? action.payload : subCar);
        case 'DELETE':
            return subCars.filter(subCar => subCar._id !== action.payload);
       
        default:
            return subCars;
    }
}