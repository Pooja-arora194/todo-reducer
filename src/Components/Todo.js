import React, { useState } from "react";


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
    <div className="container">
      <div className="row justify-content-center items-center">
        <div className="col p-2">
          <h4 className="text-center">Todo App</h4>
        </div>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" placeholder="Add task " className="form-control"id="todo-input" value={task} onChange={(e) =>onChangeHandler(e)} />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary" onClick={(e) => { submitHandler(e); }} > Add Todo </button>
          </div>
        </form>
        <div className="show">
          {
            data.map((elem) => (
              <div className="eachItem" key={elem.id}>
                 <h4 style={{ textDecoration: elem.completed ? "line-through" : "" }}>{elem.name}</h4>
             
                <i className="fa fa-edit" onClick={() => editItem(elem.id)}>  </i>
                <i className="fa fa-trash" onClick={() => deleteItem(elem.id)}
                ></i>
                <i className="fa fa-check-circle" onClick={() => handleComplete(elem)}></i>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Todo;
