export default (updateForm = {_id:1}, action) => {
    switch (action.type) {
        case 'UPFORM':
            return action.payload;
            case 'RESET':
                return updateForm = {_id: 1};
            default:
                return updateForm;
        }
    }  