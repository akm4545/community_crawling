import createAction from "redux-actions/lib/createAction";
import createRequestSaga, { createRequestActions } from "../lib/createRequestSaga";
import * as crawlingAPI from "../lib/api/crawling";
import {takeLatest} from 'redux-saga/effects';
import handleActions from "redux-actions/lib/handleActions";

const [CRAWLING_LIST, CRAWLING_LIST_SUCCESS, CRAWLING_LIST_FAILURE] = createRequestActions("crawling/CRAWLING_LIST");
const [CRAWLING, CRAWLING_SUCCESS, CRAWLING_FAILURE] = createRequestActions("crawling/CRAWLING");

export const crawlingList = createAction(CRAWLING_LIST);
export const crawlingAction = createAction(CRAWLING);

const crawlingListSaga = createRequestSaga(CRAWLING_LIST, crawlingAPI.crawlingList);
const crawlingDataSaga = createRequestSaga(CRAWLING, crawlingAPI.crawlingData);

export function* crawlingSaga (){
    yield takeLatest(CRAWLING_LIST, crawlingListSaga);
    yield takeLatest(CRAWLING, crawlingDataSaga);
};

const initState = {
    crawlingData:{
        idx: "",
        title:"",
        content: "",
        fileList:[],
    },
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
    [CRAWLING_SUCCESS]: (state, {payload: {data}}) => ({
        ...state,
        crawlingData:{
            ...state.crawlingData,
            idx: data.idx,
            title: data.title,
            content: data.content,
            fileList: data.fileList,
        },
    }),
    [CRAWLING_FAILURE]: (state, {payload: {error}}) => ({
        ...state,
        error: error
    }),
}, initState);

export default crawling;