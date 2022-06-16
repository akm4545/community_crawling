import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTopListTemplate from "../../components/main/MainTopListTemplate";
import { crawlingList } from "../../modules/crawling";

const CrawlingDataContainer = () => {
    const dispatch = useDispatch();
    const {data, err, loading} = useSelector(
        ({crawling, loading}) => ({
            data: crawling.crawlingList,
            err: crawling.error,
            loading: loading["crawling/CRAWLING_LIST"],
        })
    );
    
    useEffect(() => {
        dispatch(crawlingList());
    },[dispatch]);

    return (
        <MainTopListTemplate
            crwalingList={data}
            err={err}
            loading={loading}
        >
        </MainTopListTemplate>
    );
};

export default CrawlingDataContainer;