import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__location">{customer.address}</div>
        <div className="customer__location">{customer.email}</div>
        {/* <div className="customer_pet">{customer.animals.name}</div> */}
    </section>
)


