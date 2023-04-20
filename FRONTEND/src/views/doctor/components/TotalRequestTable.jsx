import React from "react";

const TotalRequestsTable = () => {
  const data = [
    {
      refNumber: "12345",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      animalType: "Dog",
      age: 3,
      weight: 20,
    },
    {
      refNumber: "23456",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      name: "Jane Doe",
      animalType: "Cat",
      age: 2,
      weight: 12,
    },
    // Add more dummy data here as needed
  ];

  return (
    <table>
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
          <tr key={row.refNumber}>
            <td>{row.refNumber}</td>
            <td>{row.description}</td>
            <td>{row.name}</td>
            <td>{row.animalType}</td>
            <td>{row.age}</td>
            <td>{row.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TotalRequestsTable;
