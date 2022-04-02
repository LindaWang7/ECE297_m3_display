import React from "react";

const experienceContent = [
  {
    position: "1. Enter 1st Street Name",
    details: ` Enter the first street name in bottom-left search bar. 
    Our auto-fill function will help you find the wanted street. 
    `,
  },
  {
    position: "2. Enter 2nd Street Name",
    details: `Enter the second street name in the bottom-right search bar. 
    This search bar also has auto-fill function. 
    `,
  },
  {
    position: "3. Find Intersection",
    details: `Click on “Find intersection” button to find the intersection
     of two inputted streets. Our map will automatically zoom in to the intersection 
     found if you zoom. 
    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa-arrow-right"></i>
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.position}
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
