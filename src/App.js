import React from "react";
import Todo from "./Components/Todo";
import Edit from "./Components/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(){
    return (
        <BrowserRouter>
           
            <Routes>
               <Route path ='/add' element={<Todo/>}></Route>
                <Route path ='/editdata' element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
      
     
    );
}
export default App;