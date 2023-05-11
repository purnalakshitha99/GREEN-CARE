import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditRport = () => {
  const { _id } = useParams();

  const [reports, setReport] = useState(null);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [arrival, setArrival] = useState();
  const [departure, setDeparture] = useState();
  const [problem, setProblem] = useState();
  const [solution, setSolution] = useState();

  useEffect(() => {
    fetch(`http://localhost:3007/api/v1/reportcreate/reportgen/${_id}`).then(
      (response) => {
        response.json().then((reports) => {
          setReport(reports);
          setFirstName(reports.firstname);
          setLastName(reports.lastname);
          setEmail(reports.email);
          setArrival(reports.arrival);
          setDeparture(reports.depature);
          setProblem(reports.problem);
          setSolution(reports.solution);
        });
      }
    );
  }, []);
  console.log(reports);
  //console.log(reports.firstname);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateReport = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      arrival: arrival,
      depature: departure,
      problem: problem,
      solution: solution,
    };

    axios
      .patch(
        `http://localhost:3007/api/v1/reportcreate/reportgen/${_id}`,
        updateReport
      )
      .then((res) => {
        if (res.data.message === "success") {
          setFirstName("");

          Swal.fire("Good job!", "You clicked the button!", "success");
          return onclick();
        } else {
          console.log("fail");
        }
      })
      .catch((err) => {
        try {
          console.log("error");
        } catch (error) {
          console.log("fields are empty");
        }
      });
  };
  // if(!reports) return "";
  return (
    <>
      <div>
        <h1>Edit report</h1>
        <form
          className=" justify-center flex  mt-[150px] "
          onSubmit={handleSubmit}
        >
          <div class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="firstname"
                  class="block uppercase tracking-wide  text-xs font-bold mb-2 rounde"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  htmlFor="lastname"
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-Mail
                </label>
                <input
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                  type="text"
                  placeholder="asd@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Arival time
                </label>
                <input
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                  id="grid-first-name"
                  type="time"
                  onChange={(e) => {
                    setArrival(e.target.value);
                  }}
                  value={arrival}
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Dipature Time
                </label>
                <input
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-2 leading-tight "
                  id="grid-last-name"
                  type="time"
                  onChange={(e) => {
                    setDeparture(e.target.value);
                  }}
                  value={departure}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Problem
                </label>
                <textarea
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-5 px-4 mb-3 leading-tight "
                  type="text"
                  onChange={(e) => {
                    setProblem(e.target.value);
                  }}
                  value={problem}
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Upload Image
                </label>
                <input
                  className="block w-[250px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none px-2 py-2 dark:border-gray-600 dark:placeholder-gray-400 "
                  type="file"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Solution
                </label>
                <textarea
                  className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-5 px-4 mb-3 leading-tight "
                  type="text"
                  onChange={(e) => {
                    setSolution(e.target.value);
                  }}
                  value={solution}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-primary shadow-md mb-5 ml-[150px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRport;
