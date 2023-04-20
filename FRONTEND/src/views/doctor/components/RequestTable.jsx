import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestsTable = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/v1/animal-form/${category}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Reference Number</th>
          <th>Description</th>
          <th>Name</th>
          <th>Animal Type</th>
          <th>Age</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            <td>{row._id}</td>
            <td>{row.message}</td>
            <td>{row.firstName}</td>
            <td>{row.animalSpecies}</td>
            <td>{row.age}</td>
            <td>{row.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequestsTable;
