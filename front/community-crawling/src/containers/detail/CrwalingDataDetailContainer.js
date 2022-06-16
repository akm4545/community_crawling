import React, { useEffect } from "react";
import DetailContentTemplate from "../../components/detail/DetailContentTemplate";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { crawlingAction } from "../../modules/crawling";

const CrawlingDataDetailContainer = () => {
    const dispatch = useDispatch();
    let {idx} = useParams();
    const {data, loading, err} = useSelector(({crawling, loading}) => ({
        data: crawling.crawlingData,
        err: crawling.error,
        loading: loading["crawling/CRAWLING"],
    }));

    useEffect(() => {
        dispatch(crawlingAction({idx})); 
    },[dispatch, idx]);

    return (
        <DetailContentTemplate
            data={data}
            loading={loading}
            err={err}
        >
        </DetailContentTemplate>
    );
};

export default CrawlingDataDetailContainer;