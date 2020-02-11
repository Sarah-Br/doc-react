import React from "react";

const Offices = (props) => {
  return (
  <div className="offices-countries">
      {props.officecard.map((el, i) => {
          return(
        <div className="offices-countries-images" key={i}>
          <img className="country-photo" scr={el.image} alt={el.title} />
          <div class="offices-btn">
            <h4>{el.title}</h4>
            <button class="see-openings">SEE OPENINGS</button>
          </div>
          </div>);
      })}
    </div>
  );
};

export default Offices;
