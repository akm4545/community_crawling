import createAction from "redux-actions/lib/createAction";
import createRequestSaga, { createRequestActions } from "../lib/createRequestSaga";
import * as crawlingAPI from "../lib/api/crawling";
import {takeLatest} from 'redux-saga/effects';
import handleActions from "redux-actions/lib/handleActions";

const [CRAWLING_LIST, CRAWLING_LIST_SUCCESS, CRAWLING_LIST_FAILURE] = createRequestActions("crawling/CRAWLING_LIST");

export const crawlingList = createAction(CRAWLING_LIST);

const crawlingListSaga = createRequestSaga(CRAWLING_LIST, crawlingAPI.crawlingData);

export function* crawlingSaga (){
    yield takeLatest(CRAWLING_LIST, crawlingListSaga);
};

const initState = {
    crawlingList: [],
    error: "",
};

const crawling = handleActions({
    [CRAWLING_LIST_SUCCESS]: (state, {payload: {data}}) => ({
        ...state,
        crawlingList: data,
    }),
    [CRAWLING_LIST_FAILURE]: (state, {payload: {error}}) => ({
        ...state,
        error: error,
    }),
}, initState);

export default crawling;