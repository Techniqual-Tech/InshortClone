import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import sun from "./sun.gif";
import night from "./night.gif";
import clouds from "./cloud.gif";
import "./weathercontent.css";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
function Weathercontent(props) {
    //event listener
    /* document.addEventListener('keyup', function (event) {
        // Check if the pressed key is Enter (keyCode 13) or 'Enter' (key 'Enter')
        if (event.keycode === 13 || event.key === 'Enter') {
            // Call your function here
            chng();
        }
    }); */
    //gettting nav search filed data
    const navdata = props.data;//better to update it value usign useState 
    /* useEffect(() => {
        setNavdata(props.data);
    }, [props.data]); */
    //Changecity(navdata);tommorrow will find the solution of it
    const [cityname, Changecity] = useState("")
    const [date, Changedate] = useState("")
    const [time, Changetime] = useState("")
    const [temp, Changetemp] = useState("")
    const [pressure, Changepressure] = useState("")
    const [humidity, Changehumidity] = useState("")
    const [wind, Changewind] = useState("")
    const [cloudy, Changecloudy] = useState("")
    const [daynight, Changedaynight] = useState("")
    const [dnimg, Changednimg] = useState(sun)
    const [cloudimg, Changecloudimg] = useState(clouds)
    //next five day
    const [d1img, Changed1img] = useState("01n")
    const [d2img, Changed2img] = useState("01d")
    const [d3img, Changed3img] = useState("02n")
    const [d4img, Changed4img] = useState("02d")
    const [d5img, Changed5img] = useState("03n")

    const [d1imgname, Changed1imgname] = useState("Clear Cloud")
    const [d2imgname, Changed2imgname] = useState("Clear Sky")
    const [d3imgname, Changed3imgname] = useState("Few Cloud")
    const [d4imgname, Changed4imgname] = useState("Scattered Cloud")
    const [d5imgname, Changed5imgname] = useState("Clear Sky")

    const [d1temp, Changed1temp] = useState("22\u00B0C")
    const [d2temp, Changed2temp] = useState("23\u00B0C")
    const [d3temp, Changed3temp] = useState("24\u00B0C")
    const [d4temp, Changed4temp] = useState("25\u00B0C")
    const [d5temp, Changed5temp] = useState("26\u00B0C")

    //current location of device
    const [country, Changecountry] = useState("India");
    // State to manage error and error message
    const [error, setError] = useState(null);
    const daydivimag = {
        backgroundImage: `url(${dnimg})`,
    }
    const clouddivimag = {
        backgroundImage: `url(${`https://openweathermap.org/img/w/${cloudimg}.png`})`
    }
    //copy object for next five day data
    //var copyobj;
    //getting cloudcondition img
    function cloud(code) {
        const cloud = {
            backgroundImage: `url(${`https://openweathermap.org/img/w/${code}.png`})`,
        }
        return cloud
    }
    //getting weather
    function askweather(cityname, country) {
        console.log("i am from askweather()");
        axios.get(`http://localhost:8080/weather?city=${cityname}&country=${country}`).then(response => {
            console.log("weatherdata:- " + `http://localhost:8080/weather?city=${cityname}&country=${country}`)
            //Changecity(response.data.city.name);
            Changecity(cityname);
            Changedate(getdate(response.data.list[0].dt_txt.slice(0, 10)));
            Changetime(gettime(response.data.list[0].dt_txt.slice(10, 19)));
            Changetemp(gettemp(response.data.list[0].main.temp) + "\u00B0C");
            Changepressure("Pressure - " + response.data.list[0].main.pressure + "N");
            Changehumidity("Humidity - " + response.data.list[0].main.humidity + "%");
            Changewind("Wind - " + response.data.list[0].wind.speed + "km/hr");
            Changecloudy(response.data.list[0].weather[0].description);
            Changedaynight(dn(response.data.list[0].sys.pod))
            Changecloudimg(response.data.list[0].weather[0].icon)
            //copyobj=Object.assign({},response.data)
            //next five day
            Changed1img(response.data.list[7].weather[0].icon)
            Changed2img(response.data.list[15].weather[0].icon)
            Changed3img(response.data.list[23].weather[0].icon)
            Changed4img(response.data.list[31].weather[0].icon)
            Changed5img(response.data.list[39].weather[0].icon)

            Changed1imgname(response.data.list[7].weather[0].description)
            Changed2imgname(response.data.list[15].weather[0].description)
            Changed3imgname(response.data.list[23].weather[0].description)
            Changed4imgname(response.data.list[31].weather[0].description)
            Changed5imgname(response.data.list[39].weather[0].description)

            Changed1temp(gettemp(response.data.list[7].main.temp) + "\u00B0C")
            Changed2temp(gettemp(response.data.list[15].main.temp) + "\u00B0C")
            Changed3temp(gettemp(response.data.list[23].main.temp) + "\u00B0C")
            Changed4temp(gettemp(response.data.list[31].main.temp) + "\u00B0C")
            Changed5temp(gettemp(response.data.list[39].main.temp) + "\u00B0C")

            setError(null);

        }).catch(error => {
            //error handling
            console.log("error:-" + error);
            // Set the error state to display a popup
            setError(`${cityname} City not Found . Please try again.`);

        });
    }
    function Refresh(){
        setError(null);
        window.location.reload();
    }
    function chng() {
        console.log("i am from chng()");
        if (navdata != "") {
            console.log("navcityname" + navdata);
            Changecity(navdata);
        }
        //askweather(cityname, country);
    }
    function getdate(time) {
        const date = new Date();
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        const dayName = daysOfWeek[date.getDay()];
        const monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const monthName = monthOfYear[date.getMonth()]
        const dat = time.slice(8, 10);
        const year = time.slice(0, 4);
        const Time = dayName + "," + dat + " " + monthName + " " + year;
        return Time
    }
    function gettime(time24hr) {
        const currentDate = new Date();

        // Get hours, minutes, and seconds
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        // Convert to 12-hour format
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const twelveHourFormat = ((hours + 11) % 12 + 1) + ':' +
            (minutes < 10 ? '0' : '') + minutes + ' ' + amPm;

        return twelveHourFormat;
    }
    function gettemp(temp) {
        // Convert Kelvin to Celsius
        const celsiusTemperature = temp - 273;
        celsiusTemperature.toString().slice(0, 2)
        console.log("temperature:- " + celsiusTemperature.toString().slice(0, 2));
        //const weather=JSON.stringify(copyobj)
        //console.log("Vicky "+copyobj);
        return celsiusTemperature.toString().slice(0, 2);
    }
    function dn(dn) {
        let c = '';
        if (dn == 'd') {
            c = "Day";
            Changednimg(sun);
        } else {
            c = "Night";
            Changednimg(night);
        }
        return c
    }
    //getting next five day
    function getnextday(num) {
        let dayName;
        const date = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (date.getDay() + num >= 7) {
            dayName = daysOfWeek[date.getDay() + num - 7];
        } else {
            dayName = daysOfWeek[date.getDay() + num];
        }
        return dayName;
    }
    //getting current postion city of device
    function getLocalIpinfo() {
        console.log("I am from getLocalIpinfo()");
        if (navigator.geolocation) {//does browser support geolocation
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use a third-party service to get city information based on latitude and longitude
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8994a5584c49f1961832c07565ce92e3`;

        // Replace YOUR_OPENWEATHERMAP_API_KEY with your actual OpenWeatherMap API key
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const cty = data.name;
                const cuntry = data.sys.country;
                //alert(`Current City: ${city}`);
                console.log("City" + cty + "Country" + cuntry);
                Changecity(cty);
                Changecountry(cuntry);
                //askweather(cty, cuntry);
                console.log("cityname" + cityname + " country" + country);
            })
            .catch(error => {
                console.error('Error fetching city information:', error);
                alert('Error fetching city information. Please try again.');
            });
    }
    //effect when first dom elemnt render
    useEffect(() => {
        console.log("i am from useEffect()");
        getLocalIpinfo();
    }, []);
    //for updating navdata 
    useEffect(() => {
        document.addEventListener('keyup', handleKeyPress);//set up event listener when component mount
        return () => {
            document.removeEventListener('keyup', handleKeyPress);//clean up event listener when component unmount
        };
    }, [navdata]);

    const handleKeyPress = (event) => {
        if (event.keycode === 13 || event.key === 'Enter') {
            chng();
        }
    };

    //effect when change the usestate elemnt element
    useEffect(() => {
        getweatherbg();
        //Changecity(navdata);
        if (cityname !== "") {

            console.log("i am from useeffect changedata" + cityname);
            askweather(cityname, country);
            //Changecity("");
        }
    }, [cityname]);

    const [bg, Changebg] = useState("")
    const style = {
        backgroundImage: `url(${bg})`,
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
    return (
        <>
            <div className="weather_div_wcon" style={style}>
                <div className="current_forcastdiv_wcon">
                    <div className="current_forcast_wcon">
                        <div><p><i className="fa fa-map-marker"></i> {cityname} </p></div>
                        <div><p>{date}</p></div>
                        <div><p>{time}</p></div>
                    </div>
                    <div className="current_forcast_wcon"><div><p id="degree">{temp}</p></div></div>
                    <div className="current_forcast_wcon"><div id="cloudyimgdiv" style={clouddivimag}></div><b><p>{cloudy}</p></b></div>
                    <div className="current_forcast_wcon"><div id="daynightimgdiv" style={daydivimag}></div><b><p>{daynight}</p></b></div>
                    <div className="current_forcast_wcon"><div><p>{pressure}</p>
                        <p>{humidity}</p>
                        <p>{wind}</p></div></div>
                </div>
                <div className="future_forcastdiv_wcon">
                    <div className="daydiv_wcon">
                        <div><p className="boldname_wcon">{getnextday(1)}</p></div>
                        <div><div className="cloudcondition_wcon" style={cloud(d1img)}></div><div><p>{d1imgname}</p></div></div>
                        <div className="none_wcon"><p>{d1temp}</p></div>
                    </div>
                    <div className="daydiv_wcon">
                        <div><p className="boldname_wcon">{getnextday(2)}</p></div>
                        <div><div className="cloudcondition_wcon" style={cloud(d2img)}></div><div><p>{d2imgname}</p></div></div>
                        <div className="none_wcon"><p>{d2temp}</p></div></div>
                    <div className="daydiv_wcon">
                        <div><p className="boldname_wcon">{getnextday(3)}</p></div>
                        <div><div className="cloudcondition_wcon" style={cloud(d3img)}></div><div><p>{d3imgname}</p></div></div>
                        <div className="none_wcon"><p>{d3temp}</p></div>
                    </div>
                    <div className="daydiv_wcon">
                        <div><p className="boldname_wcon">{getnextday(4)}</p></div>
                        <div><div className="cloudcondition_wcon" style={cloud(d4img)}></div><div><p>{d4imgname}</p></div></div>
                        <div className="none_wcon"><p>{d4temp}</p></div>
                    </div>
                    <div className="daydiv_wcon">
                        <div><p className="boldname_wcon">{getnextday(5)}</p></div>
                        <div><div className="cloudcondition_wcon" style={cloud(d5img)}></div><div><p>{d5imgname}</p></div></div>
                        <div className="none_wcon"><p>{d5temp}</p></div>
                    </div>
                </div>
            </div>
            {/* <button onClick={chng}>GetWeather</button> */}
            {/* Conditionally render the error popup */}
            {error && (
                <div className="error-popup_wcon">
                    <p>{error}</p>
                    <button onClick={() => Refresh()}>Close</button>
                </div>
            )}
        </>
    )
}

export default Weathercontent;