import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import About from "../components/about"
import './indexpage.css'
import img1 from './imagefolder/img1.jpg';
import img2 from './imagefolder/img2.png';
import img3 from './imagefolder/img3.png';
import img4 from './imagefolder/img4.png';
import img5 from './imagefolder/img5.png';
import img6 from './imagefolder/img6.png';
import img7 from './imagefolder/img7.png';
import img8 from './imagefolder/img8.png';
import img9 from './imagefolder/img9.png';
import img10 from './imagefolder/img10.png';
import img11 from './imagefolder/img11.png';
import img12 from './imagefolder/img12.jpg';
import img13 from './imagefolder/img13.png';

function Index() {
    const navigate=useNavigate();
    const leftmover = '&#11160;';//html content
    const rightmover = '&#11162;';
    // Create refs for each bodychild div
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);
    const div8Ref = useRef(null);
    // Function to scroll to a specific div
    const [color, Changecolor] = useState("div1Ref");
    const scrollToDiv = (ref, refvar) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        Changecolor(refvar);
    };
    function newsgo() {
        navigate(`/newspage`);
    }
    return (
        <>
            <div className="indexpageip">
                <div className="navbarip">
                    <div className="inshortlogo_nameip">
                        <div className="inshortlogoip"></div>
                        <div className="inshortnameip">
                            <p>inshots</p>
                            <p>stay informed</p>
                        </div>
                    </div>
                    <div className="navigationip">
                        <a href="#" onClick={()=>{newsgo()}}><p>Read Now</p></a>
                        <a href="https://blog.inshorts.com/" target="_blank"><p>Blog</p></a>
                    </div>
                </div>
                <div className="indexcontentip">
                    {/* <div className="leftnav scroller">
                        <div dangerouslySetInnerHTML={{ __html: leftmover }} />
                    </div> */}
                    <div className="bdycontentip">
                        <div className="bodychildip" ref={div1Ref}>
                            <div className='bodychildcontentip'>
                                <div className='imagip' style={{ backgroundImage: `url(${img1})` }}></div>
                                <div className='contenip'>
                                    <p className='indexcommonfontip titlefontip'>Stay informed in 60 words</p>
                                    <p className='indexcommonfontip titledescip'>
                                        We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.
                                    </p>
                                    <div className='appstoredivip'>
                                        <div className='applestoreip' style={{ backgroundImage: `url(${img2})` }}></div>
                                        <div className='androidstoreip' style={{ backgroundImage: `url(${img3})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div2Ref}>
                            <div className='bodychildcontenip'>
                                <div className='titledesip'><u>Awards</u></div>
                                <div className='pagemiddivip' style={{ backgroundImage: `url(${img4})` }}></div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div3Ref}>
                            <div className='bodychildcontentip'>
                                <div className='imagip' style={{ backgroundImage: `url(${img5})` }}></div>
                                <div className='contenip'>
                                    <p className='indexcommonfontip titlefontip'>Your Personal App,Your Personalised Shorts.</p>
                                    <p className='indexcommonfontip titledescip'>
                                        Our AI engine intuitively understands what you like reading, and delivers more of that in a single feed. In your ‘My Feed’, everything you read, is everything you need
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div4Ref}>
                            <div className='bodychildcontentip'>
                                <div className='imagip' style={{ backgroundImage: `url(${img6})` }}></div>
                                <div className='contenip'>
                                    <p className='indexcommonfontip titlefontip'>Explore an array of news categories, all in one place.</p>
                                    <p className='indexcommonfontip titledescip'>
                                        Browse through the section of your choice and discover trending news topics. Share your opinion on stories instantly by submitting your response on our poll.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div5Ref}>
                            <div className='bodychildcontentip'>
                                <div className='imagip' style={{ backgroundImage: `url(${img7})` }}></div>
                                <div className='contenip'>
                                    <p className='indexcommonfontip titlefontip'>Your favourite sources in one app. In short.</p>
                                    <p className='indexcommonfontip titledescip'>
                                        We pick-up articles from all your favourite sources and present them in 60-word shorts. Read full articles for shorts that interest you, within the app.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div6Ref}>
                            <div className='bodychildcontenip'>
                                <div className='titledesip'><u>As Featured In</u></div>
                                <div className='pagemiddivip'>
                                    <div className='pagemiddivchildip' style={{ backgroundImage: `url(${img8})` }}></div>
                                    <div className='pagemiddivchildip' style={{ backgroundImage: `url(${img9})` }}></div>
                                    <div className='pagemiddivchildip' style={{ backgroundImage: `url(${img10})` }}></div>
                                    <div className='pagemiddivchildip' style={{ backgroundImage: `url(${img11})` }}></div>
                                </div>
                                <div className='pagemiddivchildip' style={{ backgroundImage: `url(${img12})` }}></div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div7Ref}>
                            <div className='bodychildcontenip lastsecondip'>
                                <div className='titledesip'><u>Best in the Business</u></div>
                                <div className='pagemiddivip'>
                                    <div className='pagemidcip'>
                                        <div className='pagemidcimgip p1ip' style={{ backgroundImage: `url(${img13})`, }}></div>
                                        <div className='pagemidccontentip'>
                                            <p className='pagemidccontent_tilteip indexcommonfontip'>
                                                Loved by users
                                            </p>
                                            <p className='pagemidccontent_descip indexcommonfontip'>
                                                With a rating of 4.6, we’re the highest-rated news app on the Playstore
                                            </p>
                                        </div>
                                    </div>
                                    <div className='pagemidcip'>
                                        <div className='pagemidcimgip p2ip' style={{ backgroundImage: `url(${img13})`, }}></div>
                                        <div className='pagemidccontentip'>
                                            <p className='pagemidccontent_tilteip indexcommonfontip'>
                                                Loved by app stores
                                            </p>
                                            <p className='pagemidccontent_descip indexcommonfontip'>
                                                We’ve been in Apple’s Featured Apps showcase and Google’s list of the Best Apps of 2015
                                            </p>
                                        </div>
                                    </div>
                                    <div className='pagemidcip'>
                                        <div className='pagemidcimgip p3ip' style={{ backgroundImage: `url(${img13})`, }}></div>
                                        <div className='pagemidccontentip'>
                                            <p className='pagemidccontent_tilteip indexcommonfontip'>
                                                Loved by publishers
                                            </p>
                                            <p className='pagemidccontent_descip indexcommonfontip'>
                                                With more than 30 content partners globally, publishers love being on Inshorts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bodychildip" ref={div8Ref}>
                            <div className='bodychildcontenip'>
                                <div className='titledesip'><u>Download the easiest way to stay informed</u></div>
                                <div className='pagemiddivip'>
                                    <div className='appstoredivip'>
                                        <div className='applestoreip' style={{ backgroundImage: `url(${img2})` }}></div>
                                        <div className='androidstoreip' style={{ backgroundImage: `url(${img3})` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="rightnav scroller">
                        <div dangerouslySetInnerHTML={{ __html: rightmover }} />
                    </div> */}
                </div>
                <div className="navigatorip">
                    <div className={`navigatorpoint ${color === 'div1Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div1Ref, "div1Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div2Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div2Ref, "div2Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div3Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div3Ref, "div3Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div4Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div4Ref, "div4Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div5Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div5Ref, "div5Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div6Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div6Ref, "div6Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div7Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div7Ref, "div7Ref")}></div>
                    <div className={`navigatorpoint ${color === 'div8Ref' ? 'currentrenderdiv' : 'navigatorpoint'}`} onClick={() => scrollToDiv(div8Ref, "div8Ref")}></div>

                </div>
            </div>
            <About />
        </>
    );
}
export default Index;