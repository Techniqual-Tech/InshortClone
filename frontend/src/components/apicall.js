import axios from "axios";
async function fetchData(query) {
    const data=await axios.get(`http://localhost:8080/api?query="${query}"`);//axios already get data in json format
    //console.log("my fetch data"+data);
    return data;
}
export {fetchData};