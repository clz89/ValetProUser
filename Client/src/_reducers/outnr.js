export default (outnr = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...outnr, action.payload];
        case 'GET':
            return action.payload;
        case 'UPDATE':
            return outnr.map(outnr => outnr._id === action.payload._id ? action.payload : outnr);
        case 'DELETE':
            return outnr.filter(outnr => outnr._id !== action.payload);
       
        default:
            return outnr;
    }
}