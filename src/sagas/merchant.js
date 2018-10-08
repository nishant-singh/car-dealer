import { put, takeEvery, all } from 'redux-saga/effects';
import config from "../config/base-config";
import getPaginationObject  from "../utils/paginate";

import actions from "../actions/constants";

function* fetchMerchantList(action) {
  const pageNum = action.payload.pageNum || 1;
  const merchantListAPI = `${config.base_url}/merchants?_page=${pageNum}&_limit=${config.page_length}`;
  try { 
    const response = yield fetchDataWithHeaders(merchantListAPI),
          headers = response.headers,
          json = yield response.json();

    const pages = headers.get('X-Total-Count'),
          paginationPayload = getPaginationObject(pageNum, parseInt(pages, 10));
    yield put({
      type: actions.SET_MERCHANT_LIST,
      payload: json,
    }); 
    yield put({
      type: actions.SET_PAGINATION,
      payload: paginationPayload,
    });
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {loading: false},
    });
  }
}
function* fetchMerchant(action) {
  const merchantAPI = `${config.base_url}/merchants/${action.payload.id}`;
  try {
    const json = yield fetchData(merchantAPI);
    yield put({
      type: actions.SET_ACTIVE_MERCHANT,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {
        loading: false
      },
    });
  }
}
function* updateMerchant(action) {
  const merchantAPI = `${config.base_url}/merchants/${action.payload.id}`;
  try {
    const json = yield fetchData(merchantAPI, 'PATCH', action.payload);
    yield put({
      type: actions.MERCHANT_UPDATED,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {
        loading: false
      },
    });
  }
}
function* saveMerchant(action) {
  const merchantAPI = `${config.base_url}/merchants/`;
  try {
    const json = yield fetchData(merchantAPI, 'POST', action.payload);
    yield put({
      type: actions.MERCHANT_SAVED,
      payload: json,
    });
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {
        loading: false
      },
    });
  }
}
function* deleteMerchant(action) {
  const merchantListAPI = `${config.base_url}/merchants/${action.payload}`;
  try { 
    yield fetchData(merchantListAPI, 'DELETE');
    yield put({
      type: actions.MERCHANT_DELETED,
      payload: action.payload,
    }); 
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {loading: false},
    });
  }
}
function fetchData(api, type = 'GET', data = {}) {
  let body = JSON.stringify(data);
  if(type === 'GET')
    body = undefined;
  return fetch(api,
    {
      method: type,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: body,
    }
  ).then(response => response.json());
}
function fetchDataWithHeaders(api){
  return fetch(api)
  .then(response => response);
}

function* actionWatcher() {
    yield takeEvery(actions.GET_MERCHANT_LIST, fetchMerchantList);
    yield takeEvery(actions.GET_ACTIVE_MERCHANT, fetchMerchant);
    yield takeEvery(actions.UPDATE_MERCHANT, updateMerchant);
    yield takeEvery(actions.SAVE_MERCHANT, saveMerchant);
    yield takeEvery(actions.DELETE_MERCHANT, deleteMerchant);
    yield takeEvery(actions.NAVIGATE, fetchMerchantList);
}
export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}