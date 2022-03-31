import React from "react";
import Education from "./Education";
import Experience from "./Experience";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h5 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              A Step by Step Guide for Finding the Shortest Path
            </h5>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
