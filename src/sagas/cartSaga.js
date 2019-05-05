import { takeLatest, put } from "redux-saga/effects"

import { cartAdd, cartRemove } from "../actions/cart"

function* addToCart(action) {
    const id = yield action.id
    yield put(cartAdd(id))
}

function* removeFromCart(action) {
    const id = yield action.id
    yield put(cartRemove(id))
}

export function* watcherSaga() {
    yield takeLatest("ADD", addToCart)
    yield takeLatest("REMOVE", removeFromCart)
}