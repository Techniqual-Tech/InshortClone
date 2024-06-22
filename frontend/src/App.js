import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Newspage from "./pages/newspage";
import Weatherpage from "./pages/weatherpage";
import Index from "./pages/indexpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/weatherpage' element={<Weatherpage/>}/>
        <Route path='/newspage' element={<Newspage/>}/>

      </Routes>
    </BrowserRouter>
  );
}
{/* <>
    <Index/>
    <Newspage />
    <Weatherpage />
</> */}
export default App;
