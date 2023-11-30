import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const apiUrl="http://localhost:3001/posts"
const FormCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const [error, setErrors]=useState({
    title:'',
    author:''
  })
  const { title, author } = formData; // Destructuring the formData for cleaner code
  const handleChange = (e) => {
    // Use the 'name' attribute to dynamically update the corresponding property
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...error,
      [e.target.name]:''
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim()){
      setErrors({
        ...error,
        title:'required title'
      })
    }

    
    if(!author.trim()){
      setErrors({
        ...error,
        title:'required author'
      })
    }
    axios.
    post(apiUrl, formData)
      .then((res)=>{
        console.log(res, 'form data resposne')
      })
    
  //  console.log(formData, 'formdata');
    setFormData({
      title: '',
      author: '',
    });
  };

 

  return (
    <div>
        <h3 style={{textAlign:'center'}}>Create Form</h3>
      <div className='container' style={{display:'flex', justifyContent:'center'}}>
       
           
        <form onSubmit={handleSubmit} >
          {error.title && <p className='error-message'>{error.title}</p>}
          <label style={{textAlign:'left'}}>
            Title
            <input
              type="text"
              value={title}
              name="title"
              onChange={handleChange}
            />
          </label>
          {error.author && <p className='error-message'>{error.author}</p>}
          <label style={{textAlign:'left'}}>
            Author
            <input
              type="text"
              value={author}
              name="author"
              onChange={handleChange}
            />
          </label>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>

            <button type="submit">Submit</button>
            </div>
            <div>
           <Link to={"/"}>Back</Link>
            </div>
          </div>
        </form></div>
          </div>
   
  );
};

export default FormCreate;
