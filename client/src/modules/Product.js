import map from 'lodash/map'
import {createConstants, createReducer} from 'redux-module-builder'
import omit from 'lodash/omit'

export const initialState = {
    isFetchProducts: false,
    productsFetched: false,
    list: [],
    details: {},
    fetchFailed: false
}

export const types = createConstants('product')(
    'FETCHING',
    'FETCHED',
    'FETCH_FAILED',
    'CREATING',
    'CREATED',
    'UPDATING',
    'UPDATED',
    'DELETING',
    'DELETED'
)

export const actions = {
    getList() {
        return (dispatch, getState) => {
            dispatch({ type: types.FETCHING, list: [] })

            return fetch('/product', {
                method: 'GET'
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.FETCHED, ...json}))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err }))
        }
    },
    get(id) {
        return (dispatch, getState) => {
            dispatch({ type: types.FETCHING, details: {} })

            return fetch(`/product/{id}`, {
                method: 'GET'
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.FETCHED, ...json }))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err}))
        }
    },
    create(values) {
        const body = new FormData()
        const headers = new Headers({
            "X-CSRFToken": values.csrf_token
        })

        map(values, (value, key) => {
            if(key == 'images') {
                for(var i in value) {
                    body.append('file', value[i])
                }
                return
            }
            body.append(key, value)
        })

        return (dispatch, getState) => {
            return fetch(`/product`, {
                method: 'POST',
                credentials: 'same-origin',
                headers,
                body
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.FETCHED, ...json }))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err}))
        }
    },
    update(id, values) {
        const body = new FormData()

        map(values, (value, key) => body.append(key, value))

        return (dispatch, getState) => {
            return fetch(`/product`, {
                method: 'PUT',
                credentials: 'same-origin',
                body
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.CREATED, ...json }))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err }))
        }
    },
    delete(id) {
        return (dispatch, getState) => {
            return fetch(`/product/{id}`, {
                method: 'DELETE',
                credentials: 'same-origin'
            })
            .then(({ json }) => json())
            .then((json) => dispatch({ type: types.FETCHED, ...json}))
            .catch(err => dispatch({type: types.FETCH_FAILED, message: err }))
        }
    }
}

export const reducer = createReducer({
    [types.FETCHING](state, { list, message }) {
        return {
            ...state,
            list
        }
    },
    [types.FETCH_FAILED](state, { message }) {
        return {
            ...state,
            message
        }
    },
    [types.FETCHED](state, { list, message }) {
        return {
            ...state,
            list
        }
    },
    [types.CREATING](state, { details, message }) {
        return {
            ...state,
            details
        }
    },
    [types.DELETED](state, { details, message }) {
        return {
            ...state,
            details
        }
    },
    [types.UPDATED](state, { details, message }) {
        return {
            ...state,
            details
        }
    }
})
