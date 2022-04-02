import React from "react";

const educationContent = [
  // {
  //   steps: "4. Save Intersections",
  //   details: `If you want to save this found intersection as start or end intersection, 
  //   click on “Save as Start Intersection” or “Save as End Intersection” button. 
  //   `,
  // },
  // {
  //   steps: "5. Set Intersections Using Mouse",
  //   details: `Besides, the start and end intersections can be set by mouse click. 
  //   The way to do that is to mouse click on a intersection and click on 
  //   “Save as Start Intersection” or “Save as End Intersection” button.

  //   `,
  // },
  // {
  //   steps: "6. Find Route",
  //   details: `After both start and end intersections are set, click on
  //    “Navigate” button to see the recommended route.`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
          </div>
          <h5 className="poppins-font text-uppercase">
            {val.steps}
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
