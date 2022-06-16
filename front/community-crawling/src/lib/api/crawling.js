import asyncRequestBase from "./asyncRequestBase";

export const crawlingList = () => {
    return asyncRequestBase("GET", "http://127.0.0.1:8080/crawling");
};

export const crawlingData = ({idx}) => {
    return asyncRequestBase("GET", `http://127.0.0.1:8080/crawling/${idx}`);
};