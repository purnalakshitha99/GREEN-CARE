
import PopUp from "./PopUp";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Consultunt() {
  const [popreport, setpopreport] = useState(false);
  const handleClose = () => setpopreport(false);
  return (
    <>
      <div>
        <Link className="btn btn-primary text-left" onClick={() => setpopreport(true)}>
          click
        </Link>
      </div>
      <PopUp onClose={handleClose} visivle={popreport} />
    </>
  );
}

export default Consultunt;