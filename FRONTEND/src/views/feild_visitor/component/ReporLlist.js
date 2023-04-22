import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Report from './Report';
import NavBar from "../../../layouts/navbar";


function ReporLlist() {
    const [reports, setreport] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3007/api/v1/reportcreate/reportgen")
          .then((res) => { res.json().then((reports)=> {
            setreport(reports);
          });
          });
      },[]);
  return (
    <>
    <NavBar/>
    <div>
      {
        reports.length > 0 && reports.map((report)=> 
        <Report{...report} />
        //<a>{report.firstname}</a>
        ) 
      }
    </div>
    </>
  )
}

export default ReporLlist