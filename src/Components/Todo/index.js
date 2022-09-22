
import React, { useState, useEffect } from "react";
import todoReducer from "./reducer";

const initialState = [];
const Todo = () => {
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  const [inputval, setInputval] = useState("");
  const [isEdit, setisEdit] = useState({state:false,value:''})

  useEffect(() => {

  },[]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addinputdata = () => {
    dispatch({ type: "add", value: inputval });
    setInputval('')
  };
  const deleteFunc=(name)=>{
    dispatch({ type: "delete", value: name });
  }

  const editFunc=(name)=>{
    setisEdit({state:true,value:name})
    setInputval(name)
  }

  const editStateFun=()=>{
    dispatch({ type: "edit", name: isEdit.value ,value:inputval})
    setisEdit({state:false})
    setInputval('')
  }

  // const handlecomplete = (status) => {
  //   console.log(status);
  //   dispatch({ type: "complete", value: status })
  // }

  return (
    <div className="container-fluid pt-4 ">
      <div className="col-sm-6 mx-auto">
        <div className="card ">
          <div className="card-header">
            <h3 className="text-center pt-5">Todo List </h3>
          </div>
          <div className="card-body">
            <form className="form-inline" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Todo....  "
                onChange={(e) => setInputval(e.target.value)}
                value={inputval}
                className="form-control"
              />
              {!isEdit.state?
              <button
                type="submit"
                className="btn btn-danger mt-3"
                onClick={addinputdata}
              >
              Add
              </button>
              :
              <button
                type="submit"
                className="btn btn-danger mt-3"
                onClick={editStateFun}
              >Edit</button>
              }
                </form>
                  {
                          state.map((element) => {
                            return (
                              <>
                              <div className="row" >
                                <div className="col-sm-10 pt-2 list " >
                                  <p style={{ textDecoration: element.status ? "line-through" : "" }}>{element.name}</p>
                                </div>
                                <div className="col-sm-2">
                                <i className="fa fa-trash btn-sm deletebtn px-3" onClick={()=>deleteFunc(element.name)}></i>
                                  <i className="fa fa-edit btn-sm editbtn"  onClick={()=>editFunc(element.name)}></i>
                                  {/* <i className="fa fa-check btn-sm "></i> */}
                              
                                </div>
                              </div>
                              </>
                            )
                          })
                        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
