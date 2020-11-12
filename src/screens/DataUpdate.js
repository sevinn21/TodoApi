import React, { useEffect, useState } from 'react'
import { getTodosById, putTodos } from '../services/Api';
import  {defaultTodo}  from '../components/DefaultTodo';

const DataUpdate = (props) => {

    const [todo, setTodo] = useState(defaultTodo);
    const [error, setError] = useState('');

    useEffect(() => {
           const init = async () => {
           const id=props.match.params.id;
          try {
            const { data } = await getTodosById(id);
            setTodo(data);
          } catch (err) {
            setError(err);
          } 
        }; 
        init();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const id=props.match.params.id;
        var data = {
          id:todo.id,
          title: todo.title,
          isDone:todo.isDone,
          user: todo.user,
        };
        try {
           await putTodos(id,data);
           alert("Veri Güncellendi")
        }
        catch(e) {
            console.log(e);
        }
      }
    return (
        <>
        <div className="header">
        <h2> Veri Düzenle</h2>
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
        
        <div className="form-div p-inputgroup" >
        <input 
        placeholder="Username"
        value={todo.user}
        onChange={(event) => {
            setTodo({
              ...todo,
              user: event.target.value,
            });}} />
        
        </div>
       
        <div className="form-div "> 
            <input
             type="checkbox"
             checked={todo.isDone}
             onChange = {(event) => {
                 setTodo({
                  ...todo,
                  isDone: !todo.isDone
                 })}} />
        </div>
       
       <div className="form-div">
       <button>Güncelle</button>
       </div>
       </form>
       </div>
       </div>
    </>
    )
}

export default DataUpdate
