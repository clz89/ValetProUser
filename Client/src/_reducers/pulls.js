export default (pulls = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...pulls, action.payload];
        case 'GET':
            return action.payload;
        case 'UPDATE':
            return pulls.map(pulls => pulls._id === action.payload._id ? action.payload : pulls);
        case 'DELETE':
            return pulls.filter(pulls => pulls._id !== action.payload);
       
        default:
            return pulls;
    }
}