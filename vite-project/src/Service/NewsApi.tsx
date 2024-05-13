import  { useState } from 'react';


async function NewsApis()  {
   const [data, setData]=useState([]);
      await fetch('http://localhost:3030/articles', {
         method: 'GET',       
         headers: { 
            'Content-Type': 'application/json',
         },
      })
         .then((response) =>          
         response.json())         
         .then((data) => {
            console.log(data);
            setData(data);
            return data;
         })
         .catch((err) => {
            console.log(err.message);
         });

   };
export default NewsApis;