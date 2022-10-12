export default (comps = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...comps, action.payload];
        case 'GET':
            return action.payload;
        case 'UPDATE':
            return comps.map(comps => comps._id === action.payload._id ? action.payload : comps);
        case 'DELETE':
            return comps.filter(comps => comps._id !== action.payload);
       
        default:
            return comps;
    }
}