import React from "react";
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import fieldinformation from "./InsertFarmerInformation"
import fieldreport from "./FieldReport"
import damagereport from "./DamageReport"
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div className="max-w-[1500px] m-auto px-6 py-12">
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
      <div className="bg-gray-200/50 rounded-lg p-4 flex flex-col justify-between items-center hover:cursor-pointer hover:scale-105 shadow-lg">
          
          <Link to="/fieldinformation"><BsFillPersonVcardFill  size={80} className="" /></Link>
          <h2 className="font-bold sm:text-xl ">farmer information</h2>
        </div>

        <div className="bg-gray-200/50 rounded-lg p-4 flex flex-col justify-between items-center hover:cursor-pointer hover:scale-105 shadow-lg">
          <Link to="/fieldreport">
          <HiOutlineClipboardDocumentList size={80} className="" />
          </Link>
          <h2 className="font-bold sm:text-xl ">Field Report</h2>
        </div>
        <div className="bg-gray-200/50 rounded-lg p-4 flex flex-col justify-between items-center hover:cursor-pointer hover:scale-105 shadow-lg">
          <Link to='/damagereport'>
          <HiDocumentText size={80} className="" />
          <h2 className="font-bold sm:text-xl ">Damage Report</h2>
          </Link>
        </div>
        
        <div className="bg-gray-200/50 rounded-lg p-4 flex flex-col justify-between items-center hover:cursor-pointer hover:scale-105 shadow-lg">
          <TbReportMoney size={80} className="" />
          <h2 className="font-bold sm:text-xl ">Bill Genarate</h2>
        </div>
      </div>
    </div>
  );
}

export default Categories;
