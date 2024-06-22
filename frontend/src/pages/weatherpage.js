import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Weatherpagenav from "../components/weatherpagenav";
/* import backgroundImage from '../components/weatherbg.jpg'; */
import Weathercontent from "../components/weathercontent";
import About from "../components/about";

function Weatherpage() {
    //change the search topic
    const [city,setCity]=useState("");
    function setcity(city){
        setCity(city);
        console.log("nav city:-"+city);
    }
    //change background of current forcast
    /* const [bg, Changebg] = useState("")
    const style = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        width:'100%',
        minHeight: '100vh',
        overflow: 'hidden'
    }
    function getweatherbg() {
        axios.get('http://localhost:8080/weatherimg').then(response => {
            console.log(response.data.urls.raw)
            Changebg(response.data.urls.raw);
        }).catch(error => {
            //error handling
            console.log("error:-"+error);
            Changebg("");
        });
    }
    useEffect(() => {
        getweatherbg();
    }, []); */
    return (
        <>
            <div /* style={style} */>
                <Weatherpagenav setcity={setcity}/>
                <Weathercontent data={city}/>
                <About />
            </div>
        </>
    )
}

export default Weatherpage;