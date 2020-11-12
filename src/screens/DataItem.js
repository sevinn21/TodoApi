import React from 'react'
import  '../Demo.css'
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa'; 
import { deleteTodos } from '../services/Api';
import { Link } from 'react-router-dom';

const DataItem = ({title,user,id}) => {
 
     const onDelete = async (id,e) => {

        try {
            await deleteTodos(id);
            alert("Veri Silindi")
        } catch (err){
            console.log(err);
        }   
    }
 
    return (
      
     <div className="card">
     <div className="card-header">
       <h3 className="d-inline">{title}</h3>  
       <p className="card-text">{user}</p> 
       <MdDeleteForever onClick={(e) => onDelete(id, e)}  />
       <Link to={`/güncelle/${id}`}>
       <FaEdit style={{width:"50px"}} props={id} />
       </Link> 
     </div>
     </div>
      
    )
}

export default DataItem
