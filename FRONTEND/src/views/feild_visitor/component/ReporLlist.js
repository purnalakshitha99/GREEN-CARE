import React, { useState, useEffect } from "react";
import Report from "./Report";
import NavBar from "../../../layouts/navbar";

function ReporLlist() {
  const [reports, setreport] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3007/api/v1/reportcreate/reportgen").then((res) => {
      res.json().then((reports) => {
        setreport(reports);
      });
    });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {reports.length > 0 &&
          reports.map(
            (report) => <Report {...report} />
            //<a>{report.firstname}</a>
          )}
      </div>
    </>
  );
}

export default ReporLlist;

// function ReporLlist(props) {
//   const [reports, setreport] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:3007/api/v1/reportcreate/reportgen/${props.reportId}`).then((res) => {
//       res.json().then((reports) => {
//         setreport(reports);
//       });
//     });
//   }, [props.reportId]);
  
//   const filteredReports = reports.filter(report => report.id === props.reportId);

//   return (
//     <>
//       <NavBar />
//       <div>
//         {filteredReports.length > 0 &&
//           filteredReports.map((report) => <Report {...report} />)
//         }
//       </div>
//     </>
//   );
// }

//   const [reports, setreport] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:3007/api/v1/reportcreate/reportgen/${props.reportId}`).then((res) => {
//       res.json().then((data) => {
//         if (Array.isArray(data)) {
//           setreport(data);
//         } else {
//           setreport([data]);
//         }
//       });
//     });
//   }, [props.reportId]);
  
//   const filteredReports = reports.filter(report => report.id === props.reportId);

//   return (
//     <>
//       <NavBar />
//       <div>
//         {filteredReports.length > 0 &&
//           filteredReports.map((report) => <Report {...report} />)
//         }
//       </div>
//     </>
//   );
// }

// export default ReporLlist;
