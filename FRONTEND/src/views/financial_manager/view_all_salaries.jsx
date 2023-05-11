import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import ('./salary_table.css')

const EditSalary = () => {

  const navigate = useNavigate();
  const [salaries, setSalaries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editedSalary, setEditedSalary] = useState(null);
  

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get('http://localhost:3007/api/v1/salary/salary');
        setSalaries(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSalaries();
  }, []);

  const handleDelete = async (salary) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this salary record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await axios.delete(
            `http://localhost:3007/api/v1/salary/salary/${salary._id}`
          );
          console.log(response.data);
          const updatedSalaries = salaries.filter((s) => s._id !== salary._id);
          setSalaries(updatedSalaries);
          swal("Salary record has been deleted!", {
            icon: "success",
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        swal("Salary record is safe!");
      }
    });
  };
  

  const handleChange = (event) => {

    const {name, value} = event.target
    setEditedSalary((preSalary)=>({
      ...preSalary,
      [name] : value,
    }));
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h2>Salary Details</h2>
      <table class = "salaryTable">
        <thead>
          <tr>
          <th>Employee ID</th>
            <th>NIC</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Employee Type</th>
            <th>Month</th>
            <th>Worked Days</th>
            <th>Cumulative Salary</th>
            
          </tr>
        </thead>
        <tbody>
          {salaries.map((salary) => (
            <tr key={salary._id}>
              {editedSalary === salary ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="employee_id"
                      value={editedSalary.employee_id}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      name="employee_type"
                      value={editedSalary.position}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={editedSalary.firstName}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={editedSalary.last}
                      onChange={handleChange}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      name="month"
                      value={editedSalary.month}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="days_worked"
                      value={editedSalary.days_worked}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="amount"
                      value={editedSalary.amount}
                      onChange={handleChange}
                    />
                  </td>
                </>
              ) : (
                <>
                
                  <td>{salary.employee_id}</td>
                  <td>{salary.NIC}</td>
                  <td>{salary.firstName}</td>
                  <td>{salary.lastName}</td>
                  <td>{salary.position}</td>
                  <td>{salary.month}</td>
                  <td>{salary.days_worked}</td>
                  <td>{salary.amount}</td>
                  <td>
                    <button type='delete' onClick={() => handleDelete(salary)}>Delete</button>
                    <button type="view" onClick={() => navigate('/update_salary')}>view</button>

                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditSalary;