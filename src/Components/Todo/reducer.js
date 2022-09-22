

export const todoReducer = (state,action) => {
  console.log("reducer",state,action)

  switch (action.type) {  
    
    case "add":
    //  console.log(action.name);
      return [...state,{name:action.value}]
  
     case "delete":
       let temp=[...state]  
      //  return state.filter((element)=>element.name!=action.value)
          const newtemp = temp.filter((element)=>
            element.name !== action.value
          )
          return [...newtemp]

      case "edit":
       
      //  return  state.filter((element)=>element.name === action.name  ? { ...element} : element)
      let temp1=[...state]
      for(let x  in temp1){
        if(temp1[x].name===action.name){
          temp1[x].name=action.value
        }
      }
      return [...temp1]


      // case "complete":
      //   return state.map((element) => element.name === action.name ? { ...element, completed: !element.completed } : element)
        

    default:return state;
  }
};
export default todoReducer;
