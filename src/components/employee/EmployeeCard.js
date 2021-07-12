import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({employee}) => (
    
    <section className="employee">
         <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        <h3 className="employee__name">{employee.name}</h3>
        <h5 className="employee__location">{employee.location.name}</h5>
        <div className="employee__location">{employee.location.address}</div>

       
    </section>
)


