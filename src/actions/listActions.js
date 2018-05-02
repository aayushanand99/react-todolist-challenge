// actions for the todo list can go here...
import types from './types'
const url = 'http://staging.k8s.omnimerse.com/'

export function getItems(param) {
    return async (dispatch) => {
        dispatch({
            type: type.getItems,
        });
        fetch(url + '/v1/TodoApi', { method: 'GET' })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.code === 200)
                    dispatch({
                        type: type.getItemsSuccess,
                        payload: { data: resp.data }
                    });
                else
                    dispatch({
                        type: type.getItemsFailure,
                    });

            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: type.getItemsFailure,
                });
            })
    };
}

export function addItem(param) {
    return async (dispatch) => {
        dispatch({
            type: types.addItem,
            payload: { item: param.item },
        });
        fetch(url + '/v1/TodoApi', { method: 'POST' })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.code === 200)
                    dispatch({
                        type: types.addItemSuccess,
                        payload: { data: resp.data }
                    });
                else
                    dispatch({
                        type: types.addItemFailure,
                        payload: { data: resp.data }
                    });
            })
            .catch((err) => {
                dispatch({
                    type: types.addItemFailure,
                    payload: { data: resp.data }
                });
                console.log(err)
            })
    };
}

export function deleteItem(param) {
    return async (dispatch) => {
        dispatch({
            type: types.deleteItem,
            payload: { index: param.index },
        });
        fetch(url + '/v1/TodoApi', { method: 'DELETE' })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.code === 200)
                    dispatch({
                        type: types.deleteItemSuccess,
                        payload: { data: resp.data }
                    });
                else
                    dispatch({
                        type: types.deleteItemFailure,
                        payload: { data: resp.data }
                    });
            })
            .catch((err) => {
                dispatch({
                    type: types.deleteItemFailure,
                    payload: { data: resp.data }
                });
                console.log(err)
            })
    };
}

export function editItem(param) {
    return (dispatch) => {
        dispatch({
            type: types.editItem,
            payload: { index: param.index, message: param.msg },
        });
        fetch(url + '/v1/TodoApi', { method: 'PUT' })
            .then((resp) => resp.json())
            .then((resp) => {
                if (resp.code === 200)
                    dispatch({
                        type: types.editItemSuccess,
                        payload: { data: resp.data }
                    });
                else
                    dispatch({
                        type: types.editItemFailure,
                        payload: { data: resp.data }
                    });
            })
            .catch((err) => {
                dispatch({
                    type: types.editItemFailure,
                    payload: { data: resp.data }
                });
                console.log(err)
            })
    };
}