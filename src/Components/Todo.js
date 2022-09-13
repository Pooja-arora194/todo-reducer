import React, { useState } from "react";
import '../App.css';
const Todo = () => {
  const [task, setTask] = useState('');
  const [data, setData] = useState([]);
  const [isedit, setIsEdit] = useState('');

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => 
  {
    e.preventDefault();
      if(!task)
      {

      }
      else
      {
          setTask(
            data.map((elem) => {
              if (elem.id === isedit) {
                return { elem, name: task };
              }
              return elem;
            })
          );
          const finalId = { id: new Date().getTime().toString(), name: task };
          setData([...data, finalId]);
          setTask("");
      }
    }
      
  const deleteItem = (id) => {
    const finalData = data.filter((elem) => { 
      return elem.id !== id;
      
    });
    setData(finalData);
   
  };
  const editItem = (id) => {
    const newEditData = data.filter((elem) => {
      return elem.id !== id;
     
    });
    const newEditData2 = data.find((elem) => {
        return elem.id === id;
      });
    setData(newEditData);
    setTask(newEditData2.name);
    setIsEdit(id);
  };

  const handleComplete = (elem) => {
    setData(
      data.map((item) => {
        if(item.id === elem.id ) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      } 
      ))
  }
  
  return (
    <div className="container-fluid pt-4 ">
       <div className="col-sm-6 mx-auto">
          <div className="card ">
              <div className="card-header">
                <h3 className="text-center pt-5">Todo List </h3>
              </div>
            <div className="card-body">
                <form className="form-inline">
                    <input type="text" placeholder="Enter Todo....  " className="form-control"id="todo-input" value={task} onChange={(e) =>onChangeHandler(e)} />
                    <button type="submit" className="btn btn-default mt-3" onClick={(e) => { submitHandler(e); }} > Add </button>
                </form>
                <div className="show pt-4">
                      {
                        data.map((elem) => (
                          <div className="" key={elem.id} >
                              <div className="row getdata">
                                  <div className="col-sm-10 list"> 
                                      <p style={{ textDecoration: elem.completed ? "line-through" : "" }} >{elem.name}
                                      </p>
                                  </div>
                                  <div className="col-sm-2  text-right ">
                                    <i className="fa fa-edit btn-sm editbtn" onClick={() => editItem(elem.id)} >  </i>
                                    <i className="fa fa-trash btn-sm deletebtn" onClick={() => deleteItem(elem.id)} ></i>
                                    <i className="fa fa-check-circle bt-sm completebtn" onClick={() => handleComplete(elem)} style={{ color: elem.completed ? "#b13c3c" : "" }}></i>
                                  </div>
                              </div>
                          </div>
                        ))
                      }
                </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Todo;
