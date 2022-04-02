import React from "react";

const experienceContent = [
  {
    position: "1. Arrows",
    details: ` 
    User can move the visible area of the map by clicking on the arrows or 
    drag the map by the mouse.
    `,
  },
  {
    position: "2. Zoom In / Out",
    details: `
    User can zoom in or out by clicking on the “Zoom In” and “Zoom Out” buttons 
    or by using the scroll wheel of the mouse.
    `,
  },
  {
    position: "3. Find Intersection",
    details: `
    After users had selected two streets in two search bars on the bottom, they can 
    click on “Find Intersection” button to find the intersection of two selected streets.
    `,
  },
  {
    position: "4. Street Names and Oneway Signs",
    details: `
    
    Click on this button to display street animus and oneway signs.

    `,
  },
  {
    position: "5. Change Map",
    details: `
    
    Click on this button and enter the name of the new map in command-line output window;


    `,
  },
  {
    position: "6. Gas Station",
    details: `
    
    Click on this button to display street animus and oneway signs.

    `,
  },
  {
    position: "7. Point of Interest",
    details: `
    
    Click on this button to show all the POIs in the city.

    `,
  },
  {
    position: "8. Parking",
    details: `
    
    Click on this button to show all the parking in the city.


    `,
  },
  {
    position: "9. Dark Mode",
    details: `
    
    Click on this button to set the map to dark mode. 

    `,
  },
  {
    position: "10. Current Road Closure",
    details: `
    
    Click on this button to show all roads that are closed currently. 
    These data are all real-time and are acquired  from internet. 


    `,
  },
  {
    position: "11. Save as Start/End Intersection",
    details: `
    
    By clicking this button, user can save the last intersection 
    selected by mouse-click or the intersection found by
    “Find Intersection” function as start or end intersection 
    for our navigation function. 



    `,
  },
  {
    position: "12. Navigate",
    details: `
    
    After start and end intersections are set, users can click 
    on this button to see the shortest route between those intersections. 


    `,
  },
  {
    position: "13. Help",
    details: `
    
    Click on this button to see brief instructions on how to use our map. 



    `,
  },
  {
    position: "14. Proceed",
    details: `
    
    Click on this button to close the map.


    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
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
