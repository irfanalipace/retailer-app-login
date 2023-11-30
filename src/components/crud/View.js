import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Create from "./Create";
import './Create.css'
import Count from "./Count";
const View = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
const totalCount=data.length
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3001/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  const handleEdit = (id) => {
    setSelectedItemId(id);
    // Navigate to the edit page with the specific ID
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    // Add logic to delete data based on ID
    fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // If deletion is successful, refresh the data
        getData();
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="container">
 
 <div className="navbar navbar-light bg-light" style={{background:'lightgray', boxShadow:'1px 2px 3px 2px skyblue'}}>
 <Link to="/contact" state={{ totalCount }} style={{padding:'16px'}}>
  <button >Total Contact</button>
</Link>
 </div>



      {/* <br></br>
      {totalCount} */}
    <div
      className="center"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <table>
        <thead>
          <tr>
            {/* <td style={{ padding: '22px' }}>ID</td> */}
            <td style={{ padding: "22px" }}>Title</td>
            <td style={{ padding: "22px" }}>Author</td>
            <td style={{ padding: "22px" }}>Action</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              {/* <td>{item?.id}</td> */}
              <td>{item?.title}</td>
              <td>{item?.author}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
              <td>
                <button>
                  <Link
                    to="/create"
                    className="text-decoration-none"
                    style={{ color: "white" }}
                  >
                    Add
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>  
    




      {/* Render the Create component with the selected item's data */}
      {/* {selectedItemId && (
        <Create editData={data.find((item) => item.id === selectedItemId)} />
      )} */}
    </div>
    </div>
  );
};

export default View;
