import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const apiUrl = "http://localhost:3001/posts";

function Dataview() {
  const [data, setData] = useState([]);
    const navigate=useNavigate();
  useEffect(() => {
    // Fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched data
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // Make a DELETE request to the API
    axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        console.log(response.data);
        // After successful deletion, fetch the updated data
        axios.get(apiUrl)
          .then(response => {
            // Update the state with the new data
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = (id) =>{
    navigate(`/edit/${id}`);
  }


  return (
    <div>
      <h4 style={{ textAlign: 'center' }}>List View Data</h4>
      <div className='center' style={{ display: 'flex', justifyContent: 'center', marginBottom: '23px' }}>
        <table>
          <thead>
            <tr>
              <td style={{ padding: '22px' }}>Title</td>
              <td style={{ padding: '22px' }}>Author</td>
              <td style={{ padding: '22px' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item?.title}</td>
                <td>{item?.author}</td>
                <button style={{ marginRight: '11px' }} onClick={() => handleDelete(item.id)}>Delete</button>
                <button style={{ marginRight: '11px' }} onClick={()=>handleEdit(item.id)}>Edit</button>
                <button ><Link to={"/create"} style={{ color:'white' }}>Add</Link></button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dataview;
