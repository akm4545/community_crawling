import asyncRequestBase from "./asyncRequestBase";

export const crawlingData = () => {
    return asyncRequestBase("GET", "http://127.0.0.1:8080/crawling");
};