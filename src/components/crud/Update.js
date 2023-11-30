// Update.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import "./Create.css";
const apiUrl = "http://localhost:3001/posts";

const Update = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    
    axios
      .get(`${apiUrl}/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const { title, author } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${apiUrl}/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        console.log("Form updated:", formData);
        navigate("/");
       
      })
      .catch((error) => {
        console.error(error);
      });

   
    setFormData({
      id: "",
      title: "",
      author: "",
    });
  };

  return (
    <div>
       
    
    <div className="create-container">
    
      <form className="create-form" onSubmit={handleSubmit}>
      <div><h3>Update Form</h3></div>
        <label>
          Title
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
          />
        </label>

        <label>
          Author
          <input
            type="text"
            value={author}
            name="author"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
    </div>
  );
};

export default Update;
