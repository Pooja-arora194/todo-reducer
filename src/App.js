import React from "react";
import Todo from "./Components/Todo";
import Countval from "./Components/Todo";    
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return (
        <BrowserRouter>
           
            <Routes>
               <Route path ='/add' element={<Todo/>}></Route>
        
            </Routes>
        </BrowserRouter>
      
     
    );
}
export default App;