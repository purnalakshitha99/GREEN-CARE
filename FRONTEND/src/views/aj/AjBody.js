import React from "react";
import JoinUs from "./body items/JoinUs";
import Agriculture from "./body items/Agriculture";
import LiveStock from "./body items/LiveStock";
function AjBody() {
  return (
    <>
    <div className="p-5">
        <Agriculture />
        <hr />
        <LiveStock />
        <hr/>
        <JoinUs />
    </div>
    </>
  );
}

export default AjBody;
