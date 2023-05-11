import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import fieldinformation from "./InsertFarmerInformation";
import fieldreport from "./FieldReport";
import damagereport from "./DamageReport";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className=" con1 container ms-5 d-flex justify-content-center align-items-center ">
      {/* categories */}
      <div className="row">
        <div className="col">
          <div class="out " >
            <Link to="/fieldinformation">
              <BsFillPersonVcardFill
                size={100}
                className="icon"
              />
            </Link>
            <div class="text">
              <h3 className="">farmer information</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="out " >
          <Link to="/fieldreport">
            <HiOutlineClipboardDocumentList size={100} className="icon" />
          </Link>
            <div class="text">
              <h3 className="">Field Report</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="out " >
          <Link to="/damagereport">
          <HiDocumentText size={100} className="icon" />
          </Link>
            <div class="text">
              <h3 className="">damage Report</h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="out " >
          <Link >
          <TbReportMoney size={100} className="icon" />
          </Link>
            <div class="text">
              <h3 className="">Bill Genarate</h3>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Categories;
