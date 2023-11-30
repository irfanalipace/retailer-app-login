import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const apiUrl = "http://localhost:3001/posts";
const FormUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    // Fetch the data for the specified ID
    axios
      .get(`${apiUrl}/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    // Use the 'name' attribute to dynamically update the corresponding property
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${apiUrl}/${id}`, formData)
      .then((res) => {
        setFormData(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData, "formdataa");

    setFormData({
      title: "",
      author: "",
    });
  };
  const { title, author } = formData;
  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center" }}>Edit Form</h3>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form onSubmit={handleSubmit}>
            <label style={{ textAlign: "left" }}>
              Title
              <input
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
              />
            </label>

            <label style={{ textAlign: "left" }}>
              Author
              <input
                type="text"
                value={author}
                name="author"
                onChange={handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormUpdate;
