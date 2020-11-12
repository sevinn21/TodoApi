import React from 'react'
import { useEffect, useState } from 'react';
import {  getTodos } from '../services/Api';
import DataItem from './DataItem';
import { Link } from 'react-router-dom';
const DataList = () => {

     const [posts, setPosts] = useState([]);
     const [isLoading, setLoading] = useState(true);
     const [error, setError] = useState('');
   
     useEffect(() => {
       const init = async () => {
         try {
           const { data } = await getTodos();
           setPosts(data);
           setLoading(false); 
         } catch (err) {
           setError(err);
         } 
       }; 
   
       init();
     }, []);


    return (
       <>
      <div className="header">
      <div className="button-demo">
      <Link to={`/ekle`}>
      <button style={{width:"150px",height:"25px" }}>Ekle</button>
      </Link>
     
      </div>
        <h3> Veri Listesi </h3>
      </div>

      <div className="demo"> 
        { isLoading ? <h2> Loader...</h2> 
        : posts.map((post) => (
        <DataItem
        id={post.id}
        title={post.title}
        user={post.user} >
        </DataItem>
       )) 
       }
    </div>
       </>
    )
}

export default DataList
