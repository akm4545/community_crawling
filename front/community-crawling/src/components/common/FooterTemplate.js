import React from "react";

const FooterTemplate = () => {
    return (
        <>
            <div id="footer">
                <div className="cwarp">
                    <p>Copyright All Right Reserved.</p>
	                {/* <p>게시글 삭제요청 : <a className="b" href="mailto:admin@aagag.com">E-mail</a> or <a className="b issue_alert">Request</a> or <a className="b" href="https://open.kakao.com/o/sEvFcATd" target="_blank">Kakao</a></p> */}
	                {/* <p>Request to delete posts email : <a className="b" href="mailto:admin@aagag.com">E-mail</a> or <a className="b issue_alert">Request</a></p> */}
                    <div className="bsidebar">
                        <u>사이드바 옵션 (Remove sidebar)</u>
                        <div>
                            <span className="btn" mode="left">왼쪽</span>
                            <span className="btn on" mode="right">오른쪽</span>
                            <span className="btn" mode="off">끄기</span>
                        </div>
                    </div>
                    <p className="site_thema">
                        <u>사이트 테마 변경 (Change site theme)</u>
                        <span thema="black" className="btn black">black</span>
                        <span thema="white" className="btn white">white</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default FooterTemplate;