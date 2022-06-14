import asyncRequestBase from "./asyncRequestBase";

export const crawlingData = () => {
    asyncRequestBase("GET", "http://127.0.0.1:8080/test");
};