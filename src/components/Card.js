import React from "react";
import { Icon } from "@iconify/react";

export const Card = (props) => {
  return (
    <div>
      <div className="d-flex p-4">
        <div className="image-container rounded-3 col-lg-4">
          <img className="rounded-3" src={props.imageUrl} alt="location"></img>
        </div>
        <div className="text px-4 col-lg-8 my-auto">
          <div className="location d-flex align-items-center gap-1">
            <Icon icon="mdi:location" width="25" color="red" />
            <h5 className="me-5 mb-0">{props.location}</h5>
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <h1 className="mt-2 mb-4">{props.title}</h1>
          <div className="time">
            <h6>
              {props.startDate} - {props.endDate}
            </h6>
          </div>
          <p className="text-justify">{props.description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
