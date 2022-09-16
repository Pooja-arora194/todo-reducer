import React, { useState, useEffect }from "react";
import '../App.css';

const Todo = () => {
 
    const defaultValue = {
      name: ''
    }
    const [getuserdata, setGetuserdata] = useState([]);
  
    const [inputval, setInputval] = useState(defaultValue);
    const [btn,setBtn]=useState({text:"Add"})
    const [id,setId]=useState(null)
  //  const [dltdata, setDltdata] = useState(null)
   // console.log(dltdata);
    const setdata = (e) => {
   
      setInputval({...inputval, [e.target.name]: e.target.value });
     
    }
 

    const addinputdata = async(e) =>{
      e.preventDefault()
      if(btn.text.toLowerCase() === "add"){
        AddData()
      }else{
        EditData()
      }
        }
    const EditData = async() =>{
     
      const { name,status } = inputval;
      const res = await fetch(`editdata/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name, status
        })
      });
      const data = await res.json();
        
        if(res.status === 404 || !data){
          alert("error");
    
        }else{
         getdata()
         setInputval((input)=>{
          return{
            ...input,
            name:""
          } 
        })
        setBtn((btn)=>{
          return{
            ...btn,
            text:"Add"
          }
        })
         alert("data edited");
        }
    }
    const AddData = async() =>{
      const { name,status } = inputval;
      const res = await fetch("/add",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          name, status
        })
      });
   const data = await res.json();
    
    if(res.status === 404 || !data){
      alert("error");

    }else{
      alert("data added");
      setInputval((input)=>{
        return{
          ...input,
          name:""
        } 
      })
     getdata()
    }
}
    const getdata = async() =>{
      const { name,status } = setInputval;
      console.log(name,status);
      const res = await fetch("/getdata", {
        method: "GET",
        headers:{
          "Content-Type": "application/json"
        }
       
      });
      const alldata = await res.json();
   
        if(res.status === 404 || !alldata){
          alert("error");

        }else{
          setGetuserdata(alldata);
        }
    }

    
      const isEdit = (element) =>{
        //console.log(element)
        setId(element._id)
        setInputval((input)=>{
          return{
            ...input,
            name:element.name
          } 
        })
        setBtn((btn)=>{
          return{
            ...btn,
            text:"Edit"
          }
        })
      }

      // const deletedata = (element) =>{
      //   console.log(element)
      //   setId(element._id)
      // }
     
    useEffect(() => {
      getdata();
    },[])

    const deletedata = async(id) => {
      console.log(id);
     const resp = await fetch(`deletedata/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
     });
 
        if(resp.status === 404){
          alert("error");
  
        }else{
          alert("data deleted")
          getdata();           
        }
    }   

      
  return (
    <div className="container-fluid pt-4 ">
       <div className="col-sm-6 mx-auto">
          <div className="card ">
              <div className="card-header">
                <h3 className="text-center pt-5">Todo List </h3>
              </div>
            <div className="card-body">
                <form className="form-inline"  method="get">
                    <input type="text"  name ="name" placeholder="Enter Todo....  " onChange={setdata} value={inputval.name} className="form-control" />
                    <button type="submit" className="btn btn-default mt-3" onClick={addinputdata}> {btn.text} </button>
                </form>
                  {
                    getuserdata.map((element) => {
                      return (
                        <>
                        <div className="row" >
                   
                          <div className="col-sm-10 pt-2 list " >
                          
                             <p>{element.name}</p>
                          </div>
                          <div className="col-sm-2">
                           <i className="fa fa-edit btn-sm editbtn" onClick={() => isEdit(element)}></i>
                            <i className="fa fa-trash btn-sm deletebtn" onClick={ () => deletedata(element._id)}></i>
                            <i className="fa fa-check-circle btn-sm completebtn"></i>
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
  )
};

export default Todo;
