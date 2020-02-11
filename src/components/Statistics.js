import React from "react";

const Statistics = () => {
  return (
    <div className="statistics">
      <div class="statistics-text">
        <h2 class="statistics-title">
          The world's <br />
          biggest healthcare platform
        </h2>
        <p>
          We work from 6 offices all over the world, bringing Docplanner Group
          to life in almost 20 countries.
        </p>
      </div>
      <div class="stat-numbers">
                <div class="first-stat-numbers">
                <div class="stat-numbers-description leader">
                        <img class="stat-logo"scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"/>
                        <h3 class="stat-number-title">Leader in 10 countries</h3>
                        <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
                </div>
                <div class="stat-numbers-description appointement">
                    <img class="stat-logo" scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"/>
                    <h3 class="stat-number-title">1.5 million appointments</h3>
                    
                    <p>booked last month</p>
                </div>
            </div>
            <div class="second-stat-numbers">
                <div class="stat-numbers-description leader">
                        <img class="stat-logo" scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"/>
                        <h3 class="stat-number-title">30 million unique patients</h3>
                        <p>visit us every month</p>
                 </div>
                <div class="stat-numbers-description appointement ">
                        <img class="stat-logo" scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"/>
                        <h3 class="stat-number-title">2 million active doctors</h3>
                        <p>trust in our solutions</p>
                </div>
            </div>
        </div>
       

    </div>
    
   
  );
};

export default Statistics;
