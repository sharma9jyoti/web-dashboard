import React from 'react';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";


function App() {
  return (
 <>
 <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/employee" exact element={<Employee/>}></Route>
      <Route path="/analytics" exact element={<Analytics/>}></Route>
      <Route path="/settings" exact element={<Settings/>}></Route>
    </Routes>
 </BrowserRouter>
 </>
  );
}
export default App;

