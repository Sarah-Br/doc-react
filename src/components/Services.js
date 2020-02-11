import React from "react";

const Services = (props) => {
  return (
    <div className="docplanner-services">
      {props.servicecard.map((el, i) => (
        <div className={el.title} key={i}>
          <h5 className="docplanner-services-title">{el.title}</h5>
          <h2 className="docplanner-services-title">
            {el.cardtitle}
            <img className="services-image" src={el.imagesrc} />
          </h2>
          {el.selecttab && (
            <select className="service-select">
              {el.selecttab.map((el, i) => (
                <option key={i}>{el}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
