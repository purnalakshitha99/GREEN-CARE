import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import ('./add_salary.css')

const FinanceDashBoard = () =>{

    const navigate = useNavigate();

    return(
        <div>
            <button type="button-clear" onClick={() => navigate('/add_salary')}>Salary Management</button>
        </div>
        
    )
}

export default FinanceDashBoard;