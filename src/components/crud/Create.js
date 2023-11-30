import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Create.css";
import { useNavigate, Link } from "react-router-dom";
const apiUrl = "http://localhost:3001/posts";

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });
  const [formError, setFormError] = useState({
    title: "",
    author: "",
  });

  const { title, author } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormError({
      ...formError,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setFormError({
        ...formError,
        title: "Title is required.",
      });
      return;
    }

    if (!author.trim()) {
      setFormError({
        ...formError,
        author: "Author is required.",
      });
      return;
    }

    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        console.log("Form submitted:", formData);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });

    setFormData({
      title: "",
      author: "",
    });
  };

  return (
    <div className="create-container">
      <form className="create-form" onSubmit={handleSubmit}>
        {formError.title && <p className="error-message">{formError.title}</p>}
        <label>
          Title
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleChange}
          />
        </label>

        {formError.author && (
          <p className="error-message">{formError.author}</p>
        )}
        <label>
          Author
          <input
            type="text"
            value={author}
            name="author"
            onChange={handleChange}
          />
        </label>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {" "}
            <button type="submit">{"Submit"}</button>
          </div>
          <div>
            {" "}
            <Link to="/">back</Link>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Create;
