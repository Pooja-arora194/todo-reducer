
import '../App.css';
import {useParams} from "react-router-dom";

const Edit = () => {

    const {id} = useParams("");
    console.log(id);

 
      return (
        <div className="container-fluid pt-4 ">
           <div className="col-sm-6 mx-auto">
              <div className="card ">
                  <div className="card-header">
                    <h3 className="text-center pt-5">Todo List </h3>
                  </div>
                <div className="card-body">
                    <form className="form-inline"  method="POST">
                        
                    </form>
                   
                </div>
              </div>
            </div>
        </div> 
    
    
      )
    };
    

export default Edit;