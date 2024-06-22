import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './newspagenav.css';
import image from '../components/inshort.png'
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar({apiTopic}) {
    const navigate=useNavigate();
    const [inputValue, setInputValue] = useState('');
    //const inputref=useRef();
    const buttonRef = useRef(null);
    function inputfiled(){
        //const inputValue = inputref.current.value;
        console.log("i am button calling");
        setnewsTopics(inputValue);
        //console.log("My input filed value"+inputref.current.value);
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && buttonRef.current) {
          buttonRef.current.click();
          setInputValue('');
        }
      };
    function setnewsTopics(topics){
        apiTopic(topics);
        console.log("mynav topic:"+topics);
    }
    function weathergo() {
        navigate(`/weatherpage`);
    }
    return (
        <>
            <div className='nav_div_nnav'>
                <div className='nav_logo_nnav'>
                    <img className='logo_image_nnav' src={image} alt='Inshort'></img>
                    <p><b>Inshots News</b></p>
                </div>
                <div className='nav_topic_nnav'>
                    <ul>
                        <li><a href='#' onClick={() => setnewsTopics("India")} className='nav_link_nnav'>India</a></li>
                        <li><a href='#' onClick={() => setnewsTopics("Sports")}  className='nav_link_nnav'>Sport</a></li>
                        <li><a href='#' onClick={() => setnewsTopics("Politics")}  className='nav_link_nnav'>Politics</a></li>
                        <li><a href='#' onClick={() => setnewsTopics("Technology")}  className='nav_link_nnav'>Technology</a></li>
                        <li><a href='#' onClick={() => weathergo() }  className='nav_link_nnav'>Weather</a></li>
                    </ul>
                </div>
                <div className='nav_search_nnav'>
                    <input className='search_topic_nnav' type="text" placeholder="search topic" value={inputValue} onKeyDown={handleKeyPress}  onChange={(e) => setInputValue(e.target.value)}  />
                    <button className='search_button_nnav' ref={buttonRef} onClick={inputfiled}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>
        </>
    )
}

export default Navbar