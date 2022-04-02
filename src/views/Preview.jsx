import React from "react";
import { Link } from "react-router-dom";
import darkButton from '../components/img/dark_button.png';
import lightButton from '../components/img/light_button.png';

const previewDemo = [
  {
    img: darkButton,
    title: "Dark Instruction",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
  {
    img: lightButton,
    title: "Light Instruction",
    routerPath: "/home-light",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Group 63</h1>
          <h2>M3 Routing Instruction</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div>
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        //src={darkButton}
                        src={`${val.img}`}
                        //src={'ECE297_m3_display../components/img/dark_button.png'}
                        //darkButton
                        //src={`.ECE297_m3_display/img/intro/${val.img}.png`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2>{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Begin
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

    
    </div>
  );
};

export default Preview;
