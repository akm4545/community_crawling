import React from "react";
import HeaderTemplate from "../common/HeaderTemplate";
import FooterTemplate from "../common/FooterTemplate";
import LeftSideTemplate from "../common/LeftSideTemplate";
import RightSideTemplate from "../common/RightSideTemplate";
import MainTopListTemplate from "./MainTopListTemplate";
import MainBottomListTemplate from "./MainBottomListTemplate";

const MainTemplate = () => {
    return (
        <>
            <HeaderTemplate></HeaderTemplate>
            <div id="container" className="cwarp">
                <LeftSideTemplate></LeftSideTemplate>
                <div className="block">
                    <div className="reload"></div>
                    <div className="aa margin_r"></div>
                </div>
                <div className="content">
                    <div className="clear">
                        <MainTopListTemplate></MainTopListTemplate>
                        <MainTopListTemplate marginClass="ml8"></MainTopListTemplate>
                        <div className="clear"></div>
                        <MainTopListTemplate></MainTopListTemplate>
                        <MainTopListTemplate marginClass="ml8"></MainTopListTemplate>
                        <div className="clear"></div>
                    </div>
                    <div className={["la", "mid"].join(" ")}></div>
                    <div className="mirror_help">
                        <p>
                            <span className="red">로그인</span>
                            을 하시면 커뮤니티 리스트를 
                            <span className="red">편집</span>
                            가능합니다.
                        </p>
                    </div>
                    <div className="clear">
                        <MainBottomListTemplate></MainBottomListTemplate>
                        <MainBottomListTemplate marginClass={"ml8"}></MainBottomListTemplate>
                        {/* <MainBottomListTemplate marginClass={"ml8"}></MainBottomListTemplate> */}
                    </div>
                </div>
                <RightSideTemplate></RightSideTemplate>
            </div>
            <FooterTemplate></FooterTemplate>
        </>
    );
};

export default MainTemplate;