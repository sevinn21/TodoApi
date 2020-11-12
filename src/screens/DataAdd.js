import React, { useState } from 'react'
import { postTodos } from '../services/Api';
import  {defaultTodo}  from '../components/DefaultTodo';

const DataAdd = () => {

    const [todo, setTodo] = useState(defaultTodo);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        var data = {
          id:todo.id,
          title: todo.title,
          isDone:todo.isDone,
          user: todo.user,

        };
      
        try {
           await postTodos(data);
           alert("Veri Eklendi");
        }
         catch(e) {
            console.log(e);
         }
 
      }
    return (
      <>
      <div className="header">
      <h2> Veri Ekle</h2>
      </div>
     
     <div className="form-control">
      <div className="form-content">
      <form  onSubmit={handleSubmit}>
     
     <div className="form-div">
     <input  
      placeholder="Title"
      value={todo.title}
      onChange={(event) => {
          setTodo({
            ...todo,
            title: event.target.value,
          });}} />
     </div>
      
      <div className="form-div" >
      <input 
      placeholder="Username"
      value={todo.user}
      onChange={(event) => {
          setTodo({
            ...todo,
            user: event.target.value,
          });}} />
      
      </div>
     
      <div className="form-div"> 
          <input 
           type="checkbox"
           value={todo.isDone}
           onChange = {(e) => {
               setTodo({
                   ...todo,
                   isDone: !todo.isDone
          })}} />
      </div>
     
     <div className="form-div">
     <button>Kaydet</button>
     </div>
    
      </form>
      </div>
     </div>
     
  </>
    )
}

export default DataAdd
