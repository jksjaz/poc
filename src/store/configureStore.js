import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import cart from "../reducers/cart"
import { watcherSaga } from "../sagas/cartSaga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    cart,
    compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watcherSaga)

export default store