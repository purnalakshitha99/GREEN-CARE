// import React from "react";

// import axios from "axios";

// import News from "./News";

// const News1 = ({ title, description, imageURL, id }) => {
 
// //   const navigate = useNavigate();
// //   const handleEdit = () => {
// //     navigate(`/myBlogs/${id}`);
// //   };
//   const deleteRequest = async () => {
//     const res = await axios
//       .delete(`http://localhost:3007/api/v1/news/${id}`)
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
// //   const handleDelete = () => {
// //     deleteRequest()
// //       .then(() => navigate("/"))
// //       .then(() => navigate("/news"));
// //   };
//   return (
//     <div>
//       {" "}
//       <div
//         style={{
//           width: "40%",
//           margin: "auto",
//           marginTop: "2rem",
//           padding: "2rem",
//           boxShadow: "5px 5px 10px #ccc",
//           ":hover": {
//             boxShadow: "10px 10px 20px #ccc",
//           },
//         }}
//       >
//         {/* {isUser && (
//           <div style={{ display: "flex" }}>
//             <button onClick={handleEdit} style={{ marginLeft: "auto" }}>
//               <ModeEditOutlineIcon color="warning" />
//             </button>
//             <button onClick={handleDelete}>
//               <DeleteForeverIcon color="error" />
//             </button>
//           </div>
//         )} */}
//         <h2>{title}</h2>
//         <img
//           style={{ height: "194px" }}
//           src={imageURL}
//           alt="News post cover"
//         />
//         <hr />
//         <br />
//         <p >
//           <b>test</b> {": "} {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default News1;
