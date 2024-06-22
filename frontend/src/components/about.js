import React from "react";
import './about.css';

function About() {
    return (
        <>
            <div className="about">
                <div className="aboutcontent">
                    <div className="leftdiv">
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Terms & Conditions</p></a>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Privacy Policy</p></a>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Notification to Vendors</p></a>
                        <div className="inshortdiv">
                            <div className="imgdiv"></div>
                            <a href="#" className="leftdivfont leftdivfont_inshorts"><p className="leftdivpara">inshots</p></a>
                        </div>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Inshorts Pvt. Ltd</p></a>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">@COPYRIGHT 2024</p></a>
                    </div>
                    <div className="rightdiv">
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Facebook</p></a>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Twitter</p></a>
                        <a href="#" className="leftdivfont"><p className="leftdivpara">Email</p></a>

                    </div>
                </div>
                <div className="aboutme">
                    <p>@design and develop by Vicky Gupta</p>
                </div>
            </div>
        </>
    )
}

export default About;