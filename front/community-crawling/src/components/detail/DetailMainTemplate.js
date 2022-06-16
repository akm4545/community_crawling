import React from "react";
import HeaderTemplate from "../common/HeaderTemplate";
import LeftSideTemplate from "../common/LeftSideTemplate";
import RightSideTemplate from "../common/RightSideTemplate";
import FooterTemplate from "../common/FooterTemplate";
import Heart from "./Heart";
import DetailBottomMenu from "./DetailBottomMenu";
import DetailInfo from "./DetailInfo";
import DetailComment from "./DetailComment";
import DetailCommentWrite from "./DetailCommentWrite";
import DetailBottomList from "./DetailBottomList";
import CrawlingDataDetailContainer from "../../containers/detail/CrwalingDataDetailContainer";

const DetailMainTemplate = () => {
    return (
        <>
            <HeaderTemplate></HeaderTemplate>
            <div id="container" className="cwarp">
                <LeftSideTemplate></LeftSideTemplate>
                <div className="block">
                    <div className="reload"></div>
                    <div className={["aa", "margin_r"].join(" ")}></div>
                </div>
                <div id="content">
                    <CrawlingDataDetailContainer></CrawlingDataDetailContainer>
                    <Heart></Heart>
                    <DetailBottomMenu></DetailBottomMenu>
                    <DetailInfo></DetailInfo>
                    <div className={["la", "mid"].join(" ")}></div>
                    <DetailComment></DetailComment>
                    <DetailCommentWrite></DetailCommentWrite>
                    <div className={["la", "mid"].join(" ")}></div>
                    <DetailBottomList></DetailBottomList>
                    <div className={["la", "mid"].join(" ")}></div>
                </div>
                <RightSideTemplate></RightSideTemplate>
            </div>
            <div className="clear"></div>
            <FooterTemplate></FooterTemplate>
        </>
    );
};

export default DetailMainTemplate;