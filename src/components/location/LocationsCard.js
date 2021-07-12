import React from "react";
import "./Location.css";
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => (
  <section className="location">
    <Link to={`/locations/detail/${location.id}`}>
            { location.name }
          </Link>
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
  </section>
);


