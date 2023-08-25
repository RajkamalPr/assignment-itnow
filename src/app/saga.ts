import { call, put, takeEvery } from "redux-saga/effects"
import { getFetch, getSucess } from "./slices/formSlice"

function* workGetTestFetch() {
  yield put(getFetch)
}

function* saga() {
  yield takeEvery("form/getFetch", workGetTestFetch)
}

export default saga
