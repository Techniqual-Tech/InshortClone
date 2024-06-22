import React, { useRef, useState } from "react";
import image from '../components/inshort.png'
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './weatherpagenav.css';

function Weathernavbar({setcity}) {
    //setting cityvariable
    const [city,setCity]=useState("");
    function setCityname(name){
        setcity(name);
    }
    //buttonref
    const buttonref=useRef(null);
    //handle key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && buttonref.current) {
          buttonref.current.click();
          setCity('');
        }
      };

    function setCty(){
        setCityname(city);
    }
    

    const countryplaceholder="India";
    return (
        <>
            <div className='nav_div_wnav'>
                <div className='nav_logo_wnav'>
                    <img className='logo_image_wnav' src={image} alt='Inshort'></img>
                    <p><b>Inshots Weather</b></p>
                </div>
                <div className='nav_search_wnav'>
                    <input className='search_topic_wnav' type="text" placeholder="search City" value={city} onKeyDown={handleKeyPress} onChange={(e) => setCity(e.target.value)}  />
                    <button className='search_button_wnav' ref={buttonref} onClick={setCty}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className='nav_topic_wnav'>
                    <button className='location_button_wnav'>
                        <i className="fa fa-map-marker"></i>
                    </button>
                    <input className='search_location_wnav' type="text" placeholder={countryplaceholder} />
                </div>

            </div>
        </>
    )
}

export default Weathernavbar;