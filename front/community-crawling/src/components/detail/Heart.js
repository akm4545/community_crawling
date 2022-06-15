import React from "react";

const Heart = () => {
    return (
        <>
            <div id="ioptvote">
                <div className={["good", "ns"].join(" ")}>
                    <div id="iheart" className={["box", "box1"].join(" ")} cnt="0">
                        {/* <svg width="70" height="70" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="heart">
                                    <path d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"></path>
                                </clipPath>
                            </defs>
                            <rect x="0" y="0" fill="rgb(180,180,180)" width="100%" height="100%" clip-path="url(#heart)"></rect>
                            <rect className="heart1" x="0" y="100%" fill="red" width="100%" height="100%" clip-path="url(#heart)"></rect>
                        </svg> */}
                        <div className="cnt">1</div>
                    </div>
                </div>
                <div className="bad"></div>
            </div>
        </>
    );
};

export default Heart;