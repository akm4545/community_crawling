import { combineReducers } from "redux";
import loading from "./loading";
import {all} from 'redux-saga/effects';
import { crawlingSaga } from "./crawling";

const rootReducer = combineReducers({
    loading,
});

export function* rootSaga() {
    yield all([crawlingSaga()])
};

export default rootReducer;