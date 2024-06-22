import React from "react";
import Navbar from "../components/newspagenav";
import Newscontent from "../components/newscontent";
import About from "../components/about";
import { useState } from "react";

function Newspage(){
    const [topic,setTopic]=useState(['Mumbai']);
    function apiTopic(top){
        setTopic(top);
        //console.log("parenttopic: "+top);
    }
    return (
        <>
        <Navbar apiTopic={apiTopic}/>
        <Newscontent data={topic}/>
        <About/>
        </>
    )
}

export default Newspage