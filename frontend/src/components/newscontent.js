import React, { useEffect } from "react";
import "./newscontent.css";
import loadinggif from "../components/loadinggif.gif";
import noresultfound from "../components/noresultfound.jpeg";
//import axios from "axios";/* FOR MARKIGN REQUEST TO LOCAL HOSTTED SERVER */
import { useState } from 'react';
import { fetchData } from "./apicall";



function Newscontent(props) {
    const navdata = props.data;
    const [mynews, setMynews] = useState([]);
    const [loading, setLoading] = useState(false); // Initialize loading state
    /* function fetchData(query) {
        axios.get(`http://localhost:8080/api?query="${query}"`).then(response => {
            console.log(response.data.articles)
            setMynews(response.data.articles);
        });
    } */
    //console.log("mynews:-"+mynews[0].source.id);----extract data like

    async function getData(topic) {
        if (loading) {
            // If a request is already in progress, don't send another
            return;
        }
        try {
            //console.log("myquery:"+topic);
            setLoading(true);
            const news = await fetchData(topic);
            setMynews(news.data.articles);
            //console.log("VIkcy news:"+mynews)
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (navdata) {
            getData(navdata);
            //fetchData('Modi);
        }
    }, [navdata])//call function only once thus using []

    return (
        <>{loading ? (
            <div className="loading_div_ncon">
                <img src={loadinggif} className="loading_gif_ncon"></img>
            </div>
        ) :mynews.length==0?(
            <div className="loading_div_ncon">
                <img src={noresultfound} className="noresultfound_ncon"></img>
            </div>
        ):(
            <div className="news_div_ncon">
                <div className="news_content_ncon">

                    {
                        mynews.map((ele) => {
                            console.log("No of news:-" + mynews.length);
                            return (
                                <>
                                    <div className="content_ncon">
                                        <div className="content_img_ncon" style={{ 'backgroundImage': `url(${ele.urlToImage})`, backgroundSize: 'cover', backgroundRepeat: 'round' }}>
                                        </div>
                                        <div className="content_description_ncon">
                                            <p className="news_title_ncon">{ele.title}</p>
                                            <p className="news_source_ncon"><b>shots by :-</b> {ele.source.name} / {ele.author} / {ele.publishedAt}</p>
                                            <p className="news_description_ncon">{ele.description}<a href={ele.url} target='_blank' style={{ textDecoration: 'none' }}>...Read more</a></p>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        )}
            {/* <button onClick={fetchData}>Api request</button> */}
        </>
    )
}

export default Newscontent;