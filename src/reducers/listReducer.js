// use this reducer for your todo list reducer...
import types from '../actions/types'

const initialState = {
    items: []
}

const ListReducer = (state = [], action) => {
    switch (action.type) {
        case types.addItem:
            return [...state, { _id: 'temp', item_name: action.payload.item }]
            break
        case types.addItemSuccess:
            state[action.payload.index] = { _id: action.payload.data._id, item_name: action.payload.data.item_name }
            return [...state]
            break
        case types.addItemFailure:
            state.splice(action.payload.index,1)
            return [...state]
            break
        case types.deleteItem:
            state.splice(action.payload.index, 1)
            return [...state]
            break
        case types.editItem: state[action.payload.index] = action.payload.message
            return [...state]
            break
        case types.getItemsSuccess:
            return action.payload.data
        default:
            return state;
    }
}

export default ListReducer;
