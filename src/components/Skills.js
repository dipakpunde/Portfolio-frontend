import meter1 from "../assets/img/c24.jpeg";
import meter2 from "../assets/img/Customization.jpeg";
import meter3 from "../assets/img/Bankiing k.jpeg";
import meter4 from "../assets/img/Crm.jpeg";
import meter5 from "../assets/img/Api.jpeg";
import meter6 from "../assets/img/PLSQL.jpeg";
import meter7 from "../assets/img/automation.jpeg";
import meter8 from "../assets/img/iReport.jpeg";
import meter9 from "../assets/img/WEB.jpeg";
import meter10 from "../assets/img/Shellscript.jpeg";
import meter11 from "../assets/img/Java.jpeg";
import meter12 from "../assets/img/11x.jpeg";
import meter13 from "../assets/img/mrt.jpeg";
import meter14 from "../assets/img/eod.jpeg";
import meter15 from "../assets/img/finacle.jpeg";
import meter16 from "../assets/img/custome.jpeg";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="mb-4">Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                {/* <h5>Product Custumazation Automation -85</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                {/* <h5>C24 Custumazation</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                {/* <h5>CRM Custumazation</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                {/* <h5>API Developement (InBOUND, OUTBOUND)</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                {/* <h5>Report Developement (JRXML and MRT)</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                {/* <h5>Functinal Knwledge</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                {/* <h5>Finux tool</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                {/* <h5>API Developement (InBOUND, OUTBOUND)</h5> */}
                            </div>
                             <div className="item">
                                <img src={meter9} alt="Image" />
                                {/* <h5>API Developement (InBOUND, OUTBOUND)</h5> */}
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
